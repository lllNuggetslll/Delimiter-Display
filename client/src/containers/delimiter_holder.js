import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteColumn, valueSearch } from '../actions/index';
import { bindActionCreators } from 'redux';
import renderHeader from '../components/render_header';
import renderDelete from '../components/render_delete';
import renderList from '../components/render_list';

export default class DelimiterHolder extends Component {
  constructor(props) {
    super(props)

    this.state = { }
    this.onDelete = this.onDelete.bind(this)
  }

  onSearch(selectedValue, index) {
    const newProps = Array.from(this.props.data[index]);
    const filteredProps = newProps.filter(column => {
      if (column.value === selectedValue){
        return column;
      }
    })

    this.props.valueSearch(filteredProps);
  }

 onDelete(value) {
   value = value.index;
   const newProps = Array.from(this.props.data);
   newProps.splice(value, 1);
   this.props.deleteColumn(newProps);
 }

  render() {
    if (this.props.data === -1 || this.props.data.length === 0) {
      return (
        <div>
          Search for:
          <ul>
            <li>quotationStart</li>
            <li>quotationEnd</li>
            <li>alternateQuotationStart</li>
            <li>alternateQuotationEnd</li>
          </ul>
        </div>
      )
    }

    const deleteBtns = renderDelete(this.props, index => this.onDelete({index}));
    const headers = renderHeader(this.props.data);
    const rows = renderList(this.props.data, (selectedValue, index) => this.onSearch(selectedValue, index), index => this.onDelete(index));

    return (
      <table className='table table-condensed'>
        <thead>
          <tr>
            <th>Click on a value to filter</th>
            {deleteBtns}
          </tr>
          <tr>
            <th>Language</th>
            {headers}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ data }) {
  return { data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteColumn, valueSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DelimiterHolder);
