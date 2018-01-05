import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { Jumbotron, Grid, Panel, Col, Well, Image, Button } from 'react-bootstrap';

import './Pontoon.css';

class Pontoon extends Component {
  constructor() {
    super();
    this.state = {
      boats: []
    }
  }
  
  componentDidMount(prevProps) {
  }

  render() {
    return (
      <div>
        <SEO
          title="Pontoon Boats | Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
      
        <Grid fluid className="pontoonPage">
          <Jumbotron className="pontoon">
            <Well>
              <h1 className="pageHeader animated slideInUp">Pontoon Boats</h1>
            </Well>
            <Well>
              <Link to="/20pontoon">
                  <h2>
                    20' Pontoon
                  </h2>
                <Image src="pontoon.gif" responsive alt="Pontoon"/>
              </Link>
            </Well>
            <Well>
              <Link to="/24pontoon">
                  <h2>
                    24' Pontoon
                  </h2>
                <Image src="pontoon.gif" responsive alt="Pontoon"/>
              </Link>
            </Well>
            <Well>
              <Link to="/28pontoon">
                  <h2>
                    28' Pontoon
                  </h2>
                <Image src="pontoon.gif" responsive alt="Pontoon"/>
              </Link>
            </Well>

          </Jumbotron>
        </Grid>
      </div>

    );
  }
}

export default Pontoon;
