import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadWeatherLocation } from '../action-creator';

export class WeatherDetail extends Component {
  static propTypes = {
    currItem: PropTypes.any,
    loadWeatherLocation: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { loadWeatherLocation, match: { params: {id}} } = this.props;
    loadWeatherLocation(id);
  }
  render() {
    const { currItem, currItem: { parent, consolidated_weather } } = this.props;
    console.log('WEATHER_BY_ID-->', parent);
    return (
      <div>
        <h1>{ currItem.title }</h1>
        <p>{ parent && parent.title }</p>
        <p>{ currItem.location_type }</p>
        <p>{ consolidated_weather && consolidated_weather[0].the_temp }</p>
        <p>{ consolidated_weather && consolidated_weather[0].weather_state_abbr }</p>
        <p>{ consolidated_weather && consolidated_weather[0].weather_state_name }</p>
        <p>{ consolidated_weather && consolidated_weather[0].applicable_date }</p>
        <p>давление { consolidated_weather && consolidated_weather[0].air_pressure }</p>
        <p>влажность { consolidated_weather && consolidated_weather[0].humidity }</p>
      </div>
    );
  }
}

export default connect((state) => ({
  currItem: state.weatherDetail
}), { loadWeatherLocation })(WeatherDetail);