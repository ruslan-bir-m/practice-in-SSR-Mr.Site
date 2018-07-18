import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadAllCurrencies } from '../action-creator';

class Bank extends Component {
  static propTypes = {
    curr: PropTypes.array,
    loadAllCurrencies: PropTypes.func.isRequired
  };

  componentDidMount(){
    const { loadAllCurrencies } = this.props;
    loadAllCurrencies();
  }

  render() {
    const { curr } = this.props;
    const currElems = curr.map(currency => <li key={currency.Cur_ID}>
      <Link to={"/bank/"+currency.Cur_ID} >
        {currency.Cur_Abbreviation}
      </Link>
    </li>)
    return (
      <div>
        <h1>Exchange rates by currencies</h1>
        <ol>
          {currElems}
        </ol>
      </div>
    );
  }
}

export default connect((state) => ({
  curr: state.currencies
}), { loadAllCurrencies })(Bank);