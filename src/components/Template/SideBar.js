import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Michael Wu</h2>
        <p><a href="mailto:wuxiaohua1011@gmail.com">wuxiaohua1011@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Michael. I like building things.
        I&apos;ve built autonmous RC cars, GoKarts,
        yet to try these on my own actual car, but once I get the funding...
      </p>
      <p>
        I am also passionate about mobile development, AR/VR, 3D printing and blockchain
        Have attempted to print all small utilities and create my own DIY smart home system
      </p>

      <p>
        If you have any interesting project(s) or ideas, hit me up!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael Wu.</p>
      <p className="copyright">Note: This website is adapted from Michael D&apos;Angelo&apos;s personal website</p>
    </section>
  </section>
);

export default SideBar;
