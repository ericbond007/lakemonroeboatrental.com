import React, { Component } from 'react';
import Media from 'react-media';
import Pulse from 'react-reveal/Pulse';
import ReactGA from 'react-ga';
import './Reserve.css';

ReactGA.initialize('UA-101048517-2');

class Reserve extends Component {
  fireEvent() {
  ReactGA.event({
    category: 'Website Interactions',
    action: 'Clicked Call to Reserve Button',
    label: 'Reserve Component'
  });
  }

  mapsLink() {
  ReactGA.outboundLink({
    label: 'Clicked Google Maps Directions'
  }, function() {
    console.log('')
  });
  }

  render() {
    return (
  <div className="reserve is-size-1-desktop is-centered" style={{marginBottom: '10vh'}}>
      <Media query="(max-width: 767px)">
        {matches => matches ? (
        <div style={{paddingTop: '10vh'}}>
          <div onClick={this.fireEvent}>
          <a href="tel:+1-812-837-9909" className="" >
              <h2 className="is-size-3">
                Call to Reserve Today!
              </h2>
              <div className="button is-primary is-large shadows ripple">
                Call Now!
              </div>
          </a>
            <a href="tel:+1-812-837-9909">
              <Pulse>
          <h3 className="is-size-1" style={{ paddingTop: '5vh' }}>
             812-837-9909
           </h3>
         </Pulse>
            </a>
          </div>
            <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/Lake+Monroe+Boat+Rental+Inc/@39.0817314,-86.4368141,17z/data=!3m1!4b1!4m5!3m4!1s0x886c654522e1fb7f:0x7e1299e6fcb7313!8m2!3d39.0817314!4d-86.4346254">
            <h4 className="is-size-2" style={{ paddingTop: '3vh' }} onClick={this.mapsLink}>
              Click here for directions!
            </h4>
          </a>
          </div>
        ):(
        <div style={{paddingTop: '10vh'}}>
        <div className="button is-primary is-large ripple">
          <h2 className="is-size-2 is-centered">
            Call to Reserve Today!
          </h2>
        </div>
    <h3 style={{color: '#2626ff'}}>
       812-837-9909
     </h3>
   </div>
        )}
      </Media>
</div>
    );
  }
}

export default Reserve;
