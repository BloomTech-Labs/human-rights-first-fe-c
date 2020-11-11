import React from 'react';
import { FooterDiv, ScrollToTop, } from '../styles/StyledComponents';



export default function Footer() {
  return (
    <FooterDiv>
      <ScrollToTop href="#" className="back-to-top">
        back to top {'  '}
        <i class="fa fa-chevron-up"></i>
      </ScrollToTop>
      <small>
        © Copyright {new Date().getFullYear()}, Human Rights First. All rights
        reserved.
      </small>
    </FooterDiv>
  );
}
