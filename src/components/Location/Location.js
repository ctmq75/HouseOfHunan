import React,{ Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './Location.scss'

const mapStyles = {
    width: '50%',
    height: '50%'
  };

  export class Location extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: 41.925605,
              lng:  -87.640731
            }
          }
        >
        <Marker
        position={{lat: 41.925605, lng:  -87.640731}} 
        onClick={this.onMarkerClick}
        name={'House of Hunan'}
      />
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div>
          <h4>House of Hunan!</h4>
          <ul>
              <li>444 W Fullerton Parkway</li>
              <li>Chicago, IL 60614</li>
              <li>(773) 929-3212</li>
              <li>*Located downstairs under Casatis*</li>

          </ul>
        </div>
      </InfoWindow>
      </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAbs_-rCldIrwqDWH_cu-I8uXKfJPdxjPc'
  })(Location);