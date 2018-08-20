import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadAllCurrencies } from '../action-creator';

class Bank extends Component {
  static propTypes = {
    curr: PropTypes.array,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
    loadAllCurrencies: PropTypes.func.isRequired
  };

  componentDidMount(){
    const { loadAllCurrencies } = this.props;
    loadAllCurrencies();
  }

  render() {
    const { curr, loading, loaded } = this.props;
    const currElems = !loading ? curr.map(currency => <li key={currency.Cur_ID}>
      <Link to={"/bank/"+currency.Cur_ID} >
        {currency.Cur_Abbreviation}
      </Link>
    </li>) : <div>Loading...</div>
    const isLoaded = loaded ? <span>Loaded</span> : ''
    return (
      <div>
        <h1>Exchange rates by currencies</h1>
        {isLoaded}
        <ol>
          {currElems}
        </ol>
      </div>
    );
  }
}

export default connect((state) => ({
  curr: state.currencies.listCurrencies,
  loading: state.currencies.loading,
  loaded: state.currencies.loaded
}), { loadAllCurrencies })(Bank);