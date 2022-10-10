import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__heading">
        copyright © {new Date().getFullYear()} to me. All rights reversed
      </p>
    </footer>
  );
};

export default Footer;
