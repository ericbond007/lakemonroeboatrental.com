import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <section>
    <NavBar />
      {children}
    <Footer />
  </section>
)

export default Layout
