import React, { Component } from 'react';

export class BankDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currency: {}
    };
  }
  componentDidMount() {
    fetch(`https://cors-anywhere.herokuapp.com/http://www.nbrb.by/API/ExRates/Rates/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        let currency = data;
        this.setState({ currency });
      })
      .catch(err => console.error(err))
  }
  render() {
    return (
      <div>
        <h1>{this.state.currency.Cur_Name}</h1>
        <p>{this.state.currency.Date} - {this.state.currency.Cur_OfficialRate}р.</p>
      </div>
    );
  }
}
