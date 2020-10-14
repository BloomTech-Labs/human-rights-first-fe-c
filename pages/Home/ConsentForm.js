import React from 'react';

const ConsentForm = () => {
  return (
    <div className="consent-popup">
      <h2 className="consent-warning">Graphic Content Warning</h2>
      <p className="consent-content">
        The content found on this web application including but not limited to:
        text, images, and or video, may be considered disturbing to some
        viewers. Please consider this information and decide whether to proceed
        to the website or you may be redirected.
      </p>
      <a href="https://www.google.com/">
        <button className="btn1">Please redirect me from this page</button>
      </a>
      <a href="/">
        <button
          className="btn2"
          onClick={() => localStorage.setItem('consent', true)}
        >
          Continue to Human Rights Considered
        </button>
      </a>
    </div>
  );
};

export default ConsentForm;
