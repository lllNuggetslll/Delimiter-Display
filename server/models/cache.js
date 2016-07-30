const fs = require('fs');
const path = require('path');
var cache = null; // cached and filtered data that will be queried from

module.exports = {
  getCache: (dir) => {
    if (!cache) { // establish a cache if not already processed
      cache = module.exports.getFilesRecursive(dir);
    }

    return cache;
  },

  getFilesRecursive: (folder) => {
    const dList = []; // list of all delimiter files

    const dirWalker = (folder) => {
      const fileContents = fs.readdirSync(folder)
      let stats = null;
      const p = '../'

      fileContents.forEach((fileName) => {
        stats = fs.lstatSync(folder + '/' + fileName);

        if (stats.isDirectory()) { // if it is a folder, search through it
          dirWalker(folder + '/' + fileName);
        } else if (fileName === 'delimiters.json') { // if it is a delimiter file, push it into the list
          dList.push([folder + '/' + fileName]);
        }
      });
    }

    dirWalker(folder)
    return module.exports.delimiterFilter(dList) // pass list to next function to filter
  },

  delimiterFilter: (list) => {
    const uniques = {};
    const filteredList = [];

    list.forEach((item) => {
      let dir = item[0];
      let file = JSON.parse(fs.readFileSync(dir));
      let lAbreviation = Object.keys(file.main)[0].toString();
      let locale = file.main[lAbreviation];

      if(!uniques[locale.identity.language]) { // only introduce unqiue languages
        uniques[locale.identity.language] = {
          language: locale.identity.language,
          delimiters: locale.delimiters
        }
      }
    });

    for (let key in uniques) { // place unique locales into final array
      filteredList.push(uniques[key]);
    }

    return filteredList;
  }
};
