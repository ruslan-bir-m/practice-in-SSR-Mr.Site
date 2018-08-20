import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadWeatherLocation } from '../action-creator';

export class WeatherDetail extends Component {
  static propTypes = {
    data: PropTypes.any,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
    loadWeatherLocation: PropTypes.func.isRequired
  };
  
  getUrl(type){
    return `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/static/img/weather/png/${type}.png`
  }
  componentDidMount() {
    const { loadWeatherLocation, match: { params: {id}} } = this.props;
    loadWeatherLocation(id);
  }
  render() {
    const { data, data: { parent, consolidated_weather: info }, loading, loaded } = this.props;
    const isLoaded = loaded ? <p>Loaded</p> : ''
    const img = info && info[0].weather_state_abbr
      ? <img src={this.getUrl(info[0].weather_state_abbr)}
        className = "weather-type"
        crossOrigin = "anonymous"/>
      : ''
    const mainInfo = !loading ?
      <div>
        <h1>{ data.title }</h1>
        <p>{ parent && parent.title }</p>
        <p>{ data.location_type }</p>
        <p>Temperature: { info && Math.floor(info[0].the_temp) } C</p>
        <p>{ img }</p>
        <p>{ info && info[0].weather_state_name }</p>
        <p>{ info && info[0].applicable_date }</p>
        <p>Air pressure: { info && info[0].air_pressure }</p>
        <p>Humidity: { info && info[0].humidity }</p>
      </div>
       :
      <p>Loading</p>
    return (
      <div>
        {isLoaded}
        {mainInfo}
      </div>
    );
  }
}

export default connect((state) => ({
  data: state.weatherDetail.data,
  loading: state.weatherDetail.loading,
  loaded: state.weatherDetail.loaded
}), { loadWeatherLocation })(WeatherDetail);