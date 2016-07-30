import React, { Component, PropTypes } from 'react';

import SearchBar from '../../containers/search_bar';
import DelimiterHolder from '../../containers/delimiter_holder';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Delimiter Display by David Nguyen</h1>
        <SearchBar />
        <DelimiterHolder />
      </div>
    );
  }
};
