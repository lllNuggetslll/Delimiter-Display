const cache = require('./cache').getCache('./main');

module.exports = {
  getInfo: (req, res) => {
    const results = [];
    const values = req.params.value;
    const acceptedValues = {
      'quotationStart': 'quotationStart',
      'quotationEnd': 'quotationEnd',
      'alternateQuotationStart': 'alternateQuotationStart',
      'alternateQuotationEnd': 'alternateQuotationEnd'
    }

    if (!acceptedValues[values]) {
      res.sendStatus(404);
    } else {
      cache.forEach((item) => {
        let result = {};
        result.language = item.language;
        result.value = item.delimiters[values];
        result.type = values;
        results.push(result);
      });
      res.status(200).send(results);
    }
  }
}
