import React, { Component } from 'react';
import SEO from '../../components/SEO';
import FAQ from '../../components/FAQ/FAQ';

class FAQPage extends Component {
  render() {
    return (
        <div className="columns is-fullheight aboutPage is-size-4-desktop is-size-5-mobile" id="contact">
        <SEO
          title="About | Lake Monroe Boat Rental"
          description="On Lake Monroe since 1992"
          path="/about"
        />
        <div className="column is-3 is-offset-2 is-fullheight is-hidden-mobile">
          <ContactSidebar />
        </div>
        <div className="column is-fullheight">
          <Contact />
        <About />
        
      </div>
        <div className="column is-3 is-offset-2 is-fullheight is-hidden-desktop">
          <ContactSidebar />
        </div>
      <div className="column is-2">
      </div>
    </div>
    );
  }
  }

export default AboutPage;
