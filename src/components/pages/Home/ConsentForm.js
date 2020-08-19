import React from 'react';

const ConsentForm = () => {
  return (
    <div>
      <h2>Graphic Content Warning</h2>
      <p>
        The content found on this web application including but not limited to:
        text, images, and or video, may be considered disturbing to some
        viewers. Please consider this information and decide whether to proceed
        to the website or you may be redirected.
      </p>
      <a href="#">
        <button>Continue to Human Rights Considered</button>
      </a>
      <a href="https://www.google.com/">
        <button>Please redirect me from this page</button>
      </a>
    </div>
  );
};

export default ConsentForm;
