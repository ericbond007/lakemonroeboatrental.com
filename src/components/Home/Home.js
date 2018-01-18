import React, { Component } from 'react';
import SEO from '../SEO';
import Boats from './Boats';
import { Section, Container, Title, SubTitle } from 'reactbulma';

import './Home.css';

class Home extends Component {
  

  render() {

    return (
      <div>
        <SEO
          title="Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
        <Section className="home">
          <Container>
            <h1 className="title is-1 is-spaced">Lake Monroe Boat Rental</h1>
            <h2 className="subtitle is-3"> Call to Reserve Today!</h2>
            <h3>
                812-837-9474
              </h3>
              <h3>Located just south east of Bloomingtion in Paynetown State Recreational Area</h3>
              <div>
              <picture className="boxedShadow lmbrMap">
 <source
   media="(min-width: 900px)"
   srcset="img/map-lg_1x.webp 1x, img/map-lg_2x.webp 2x"
   type="image/webp" />
 <source
   media="(min-width: 601px)"
   srcset="img/map-md_1x.webp 1x, img/map-md_2x.webp 2x"
   type="image/webp" />
 <source
   srcset="img/map-sm_1x.webp 1x, img/map-sm_2x.webp 2x"
   type="image/webp" />
 <img
   srcset="img/map-sm_1x.jpg 600w,
   img/map-md_1x.jpg 900w,
   img/map-lg_1x.jpg 1440w"
   src="image_lg_1x.jpg"
   type="image/jpeg"
   alt="Map of Lake Monroe Boat Rental" />
</picture>

            </div>
          </Container>
        </Section>
      </div>
    );
  }
}


export default Home;
