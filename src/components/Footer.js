import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  position: relative;
  bottom: 0;
  z-index: 97;
  width: 100vw;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterDiv>
      <small>
        © Copyright {new Date().getFullYear()}, Human Rights First. All rights
        reserved.
      </small>
    </FooterDiv>
  );
}
