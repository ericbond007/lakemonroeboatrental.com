import React, { Component } from 'react';
import About from '../../components/About/About';
import ContactSidebar from '../../components/ContactSidebar/ContactSidebar';
import Contact from '../../components/About/Contact';
import SEO from '../../components/SEO';
import NavBar from '../../components/NavBar/NavBar';

class AboutPage extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="columns is-fullheight aboutPage is-size-4-desktop is-size-5-touch is-desktop" id="contact">
          <SEO
            title="Contact | Lake Monroe Boat Rental"
            path="/contact"
            description="Contact Lake Monroe Boat Rental to reserve your boat today. Call 812-837-9909 to reserve."
          />
        <div className="column is-3 is-offset-2 is-fullheight is-hidden-touch">
          <ContactSidebar />
        </div>
        <div className="column is-fullheight">
          <Contact />
        <About />
        
      </div>
        <div className="column is-fullheight is-hidden-desktop">
          <ContactSidebar />
        </div>
      <div className="column is-2 is-hidden-touch">
      </div>
    </div>
  </div>
    );
  }
  }

export default AboutPage;
