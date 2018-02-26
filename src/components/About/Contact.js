import React from 'react';
import { Section } from 'reactbulma';
import Media from 'react-media';

const Contact = () => (
  <div>
  <Section className="contact" id="contact">
    <h1 className="title has-text-centered is-1">
      Contact Us
    </h1>
    <div className="has-text-left leftIndent">
      <Media query="(max-width: 767px)">
        {matches => matches ? (
        <p>
        Have a question about our boats? Ready to make a reservation? Give us a call at <a href="tel:+1-812-837-9909">812-837-9909</a> and we will be happy to help. 
      </p>
        ):(
      <p>
        Have a question about our boats? Ready to make a reservation? Give us a call at 812-837-9909 and we will be happy to help. 
      </p>
      )}
    </Media>
      <p>
        We currently only accept boat reservations over the phone, so please give us a call! For other inquiries, please email us at boat.rental@hotmail.com. Thanks!
      </p>
    </div>
    </Section>
  </div>
);

export default Contact;
