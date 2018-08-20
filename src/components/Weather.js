import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadLocationSearch } from '../action-creator';

class Weather extends Component {
  static propTypes = {
    loc: PropTypes.array,
    loadLocationSearch: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.timer = undefined;
    this.testFunction = this.testFunction.bind(this);
  }
  debounce() {
    return () => {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(this.testFunction, 1000);
    }
  }
  
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  componentDidUpdate(){
    console.log('DID-UPDATE');
  }
  testFunction(){
    const { loadLocationSearch } = this.props;
    if(this.state.inputValue) loadLocationSearch(this.state.inputValue);
    console.log('STATE-->',this.state.inputValue);
  }
  render() {
    const { loc } = this.props;
    const locElems = loc.map(location => <li key={location.woeid}>
      <Link to={"/weather/"+location.woeid} >
        {location.title}
      </Link>
    </li>);
    return (
      <div className="weather-search">
        <h2>Weather</h2>
        <input type="text"
          value={this.state.inputValue}
          onKeyUp={this.debounce()}
          onChange={evt => this.updateInputValue(evt)}
        />
        <ol>
          {locElems}
        </ol>
      </div>
    );
  }
}
    
export default connect((state) => ({
  loc: state.weather
}), {loadLocationSearch})(Weather);