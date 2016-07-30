import React from 'react';
import sortData from '../helpers/utils';
import renderRow from './render_row';

const renderList = (data, onSearch, onDelete) => {
  const sortedData = sortData(data, onDelete);
  const numColumns = data.length;

  const table = sortedData.map((item, index) => {
    return (
      <tr key={index}>{renderRow(item, onSearch)}</tr>
    )
  })

  return table;
}

export default renderList;
