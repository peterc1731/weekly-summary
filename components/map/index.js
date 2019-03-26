import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '335px',
  height: '180px'
};

export class MapContainer extends React.Component {
  render() {
    return (
      <div style={{ position: 'absolute' }}>
        <Map
          google={this.props.google}
          zoom={13}
          disableDefaultUI
          style={mapStyles}
          initialCenter={{
            lat: 52.04,
            lng: -0.76
          }}
        >
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 52.04, lng: -0.76 }} />
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 52.0368, lng: -0.7618 }} />
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 52.0345, lng: -0.7738 }} />
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 52.0412, lng: -0.7491 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB2l7-JS9nr4NK98gKJo0rHtfz3k98cdFA'
})(MapContainer);
