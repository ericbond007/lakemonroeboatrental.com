import React from 'react';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';

const Layout = ({ children }) => (
  <section>
    <Hero />
      {children}
    <Footer />
  </section>
)

export default Layout
