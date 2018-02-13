import React from 'react';
import Media from 'react-media';

const Reserve = () => (
  <div className="reserve is-size-1-desktop is-centered" style={{marginBottom: '10vh'}}>
      <Media query="(max-width: 767px)">
        {matches => matches ? (
    <div style={{paddingTop: '10vh'}}>
          <a href="tel:+1-812-837-9909" className="button is-primary is-large ripple">
              <h2 className="is-size-3">
                Call to Reserve Today!
              </h2>
          </a>
            <a href="tel:+1-812-837-9909">
          <h3 className="is-size-1" style={{ paddingTop: '5vh' }}>
             812-837-9909
          </h3>
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

export default Reserve;
