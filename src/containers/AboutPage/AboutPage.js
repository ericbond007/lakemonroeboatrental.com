import React, { Component } from 'react';
import SEO from '../../components/SEO';
import About from '../../components/About/About';
import { connect } from 'react-redux';
import ContactSidebar from '../../components/ContactSidebar/ContactSidebar';
import Directions from '../../components/About/Directions';
import Contact from '../../components/About/Contact';

class AboutPage extends Component {
  componentDidMount() {
  }
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
        {(this.props.about) &&
        <About about={this.props.about} />
        }
      </div>
      <div className="column is-2">
      </div>
    </div>
    );
  }
  }

function mapStateToProps(state, ownProps) {
  return {
    about: state.about
  }
}

export default connect(mapStateToProps)(AboutPage);
