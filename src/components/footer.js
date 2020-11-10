import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <a href="#" className="back-to-top">
        back to top {'  '}
        <i class="fa fa-chevron-up"></i>
      </a>
      <div className="copy">
        <small>© Copyright 2020. All rights reserved.</small>
      </div>
    </div>
  );
}
export default Footer;
