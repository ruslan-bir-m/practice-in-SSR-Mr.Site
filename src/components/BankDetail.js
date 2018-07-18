import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCurrencyById } from '../action-creator';

export class BankDetail extends Component {
  static propTypes = {
    currItem: PropTypes.object,
    loadCurrencyById: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { loadCurrencyById, match: { params: {id}} } = this.props;
    loadCurrencyById(id);
  }
  render() {
    const { currItem } = this.props;
    return (
      <div>
        <h1>{currItem.Cur_Name}</h1>
        <p>{currItem.Date} - {currItem.Cur_OfficialRate}р.</p>
      </div>
    );
  }
}

export default connect((state) => ({
  currItem: state.currency
}), { loadCurrencyById })(BankDetail);