import React from 'react';
import {
  CardTitle,
  CardContainer,
  StyledDesc,
  StyledDate,
  CardButton,
  CardDiv,
} from '../styles/StyledComponents';

const IncidentCard = props => {
  const { date, title, city, state, desc } = props.incident;

  return (
    <CardContainer className="incident-card">
      <CardTitle>{title}</CardTitle>
      <CardDiv className="location-date">
        <StyledDate>
          {city},{state} - {date}
        </StyledDate>
      </CardDiv>
      <CardDiv className="incident-description">
        <StyledDesc>{desc}</StyledDesc>
        <CardButton>Save</CardButton>
      </CardDiv>
    </CardContainer>
  );
};

export default IncidentCard;
