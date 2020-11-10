import styled from 'styled-components';
import { Layout, Menu, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const StyledTitle = styled(Title)`
  width: 100%;
  margin-left: 20px;
  margin-top: 15px;
`;

const StyledSubTitle = styled(Title)`
  margin-top: 10px;
  font-size: 10px;
`;

const StyledNavDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: end;
`;

const StyledHeader = styled(Header)`
  display: flex;
  height: 18vh;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  top: 0;
  width: 100vw;
  padding: 0% 10%;
  z-index: 100;
  border-bottom: 0.125rem solid silver;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledFilterDiv = styled.div`
  margin: 2rem;
  margin-bottom: -2rem;
  width: 35%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 0.125rem solid silver;
  border-right: 0.125rem solid silver;
`;

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
  StyledNavDiv,
  StyledTitle,
  StyledHeader,
  StyledDiv,
  MapDiv,
  StyledFilterDiv,
  StyledSubTitle,
  CardTitle,
  StyledDesc,
  StyledDate,
  CardButton,
  CardContainer,
  CardDiv,
  ButtonContainer,
};
