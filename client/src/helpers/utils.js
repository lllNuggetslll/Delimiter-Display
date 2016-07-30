import React from 'react';

const sortData = (unsortedData, onDelete) => {
  if (unsortedData[1]){
    if(unsortedData[0].length !== unsortedData[1].length) {
      onDelete(0);
    }
  }

  const sortedData = [];
  const columns = unsortedData.length;

  for (var row = 0; row < unsortedData[0].length; row++) {
    let rowData = []

    for (var column = 0; column < columns; column++) {
      rowData.push(unsortedData[column][row])
    }
    sortedData.push(rowData);
  }

  return sortedData;
}

export default sortData;
