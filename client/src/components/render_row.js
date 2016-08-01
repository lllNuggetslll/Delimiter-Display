import React from 'react';

const renderRow = (rowData, onSearch) => {
  const processedRow = rowData.map((row, index) => {
    if (index === 0) {
      return ([
        <td key={index - 1} className='language'>{row.language}</td>,
        <td
          key={index}
          value={row.value}
          onClick={() => onSearch(row.value, index)}
          className='active'>
          {row.value}
        </td>
      ]);
    } else {
      return (
        <td
          key={index}
          value={row.value}
          onClick={() => onSearch(row.value, index)}
          className='active'>
          {row.value}
        </td>)
    }
  })
  return processedRow;
}

export default renderRow;
