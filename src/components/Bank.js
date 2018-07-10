import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export class Bank extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currencies: []
    };
  }

  componentDidMount() {
    fetch(`http://www.nbrb.by/API/ExRates/Currencies`)
      .then(res => res.json())
      .then(data => {
        let currencies = data.map(item => {
          return {
            id: item.Cur_ID,
            abbr: item.Cur_Abbreviation
          }
        });
        this.setState({ currencies });
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div>
        <h1>Exchange rates by currencies</h1>
        <ol>
          {this.state.currencies.map(currency =>
            <li key={currency.id}>
              <Link to={"/bank/"+currency.id} >
                {currency.abbr}
              </Link>
            </li>
          )}
        </ol>
      </div>
    );
  }
}
