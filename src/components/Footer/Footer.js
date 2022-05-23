import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">
          FarmALive
        </a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">About</section>
          <section className="footer-info__returns">
            Help
            <br />
            Support
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            farmalive.info@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright @ 2022 TeamFarmAlive
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">7795233537</section>
          <section className="footer-info__contact">
            Join us
            <br />
            Contact Us
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
}

export default Footer;
