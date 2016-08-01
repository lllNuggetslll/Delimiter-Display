import React from 'react';

const renderDelete = (props, func) => {
  const deleteButtons = props.data.map((item, index) => {
    return (
      <th
        value={index}
        onClick={() => func(index)}
        key={index}
        className='btn-danger'>
        DELETE
      </th>
    );
  });

  return deleteButtons
}

export default renderDelete;
