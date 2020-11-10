import styled from 'styled-components';

const CardContainer = styled.div`
  box-sizing: border-box;
  width: 40%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const CardTitle = styled.h2`
  font-weight: 300;
  font-size: 2rem;
`;

const StyledDate = styled.div`
  font-size: 1.2rem;
  margin: 6px 0;
`;

const CardImg = styled.img`
  flex: 1;
  width: 30;
  height: 30;
  resizemode: contain;
`;

const StyledDesc = styled.p`
  font-weight: 300;
  font-size: 1.3rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CardButton = styled.button`
  width: 100%;
  padding: 14px 14px;
  flex-direction: row;
  justify-content: center;
  background: rgba(155, 155, 155, 0.2);
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  :hover {
    opacity: 0.8;
  }
`;

export {
  CardTitle,
  StyledDesc,
  StyledDate,
  CardButton,
  CardContainer,
  CardDiv,
  ButtonContainer,
  CardImg,
};
