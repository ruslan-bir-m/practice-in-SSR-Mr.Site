import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadLocationSearch } from '../action-creator';

class Weather extends Component {
  static propTypes = {
    loc: PropTypes.array,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
    loadLocationSearch: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.timer = undefined;
    this.getLocations = this.getLocations.bind(this);
  }
  debounce() {
    return () => {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(this.getLocations, 1000);
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
  getLocations(){
    const { loadLocationSearch } = this.props;
    if(this.state.inputValue) loadLocationSearch(this.state.inputValue);
  }

  render() {
    const { loc, loading, loaded } = this.props;
    const locElems = !loading ? loc.map(location => <li key={location.woeid}>
      <Link to={"/weather/"+location.woeid} >
        {location.title}
      </Link>
    </li>) : <div>Loading...</div>;
    const isLoaded = loaded ? <span>Loaded</span> : ''
    return (
      <div className="weather-search">
        <h2>Weather</h2>
        <input type="text"
          value={this.state.inputValue}
          onKeyUp={this.debounce()}
          onChange={evt => this.updateInputValue(evt)}
          placeholder="Enter the place"
        />
        {isLoaded}
        <ol>
          {locElems}
        </ol>
      </div>
    );
  }
}
    
export default connect((state) => ({
  loc: state.weather.listPlaces,
  loading: state.weather.loading,
  loaded: state.weather.loaded
}), {loadLocationSearch})(Weather);