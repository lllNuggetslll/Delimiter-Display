import React from 'react';

const renderHeader = (props) => {
  const names = props.map((name, index) => {
    return (
      <th key={index} >{name[0].type}</th>
    );
  });

  return names;
}

export default renderHeader;
