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
// height: 20vh
const StyledHeader = styled(Header)`
  display: flex;
  height: 20vh;
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
  border: 0.125rem solid silver;
  margin: 75px auto 60px;
`;

const FooterDiv = styled.div`
  position: relative;
  height: 10vh;
  // bottom: 0;
  z-index: 97;
  width: 100vw;
  text-align: center;
  background: rgb(0, 40, 70);
  color: white;
  padding: 15px;
`;

const ScrollToTop = styled.a`
  color: white;
  background: none;
  font-size: 0.8rem;
  font-family: sans-serif;
`;

const ChartContents = styled.div`
  height: 60vh;
  width: 80vw;
  margin: auto auto 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0 0;
`;

export {
  StyledNavDiv,
  StyledTitle,
  StyledHeader,
  StyledDiv,
  MapDiv,
  StyledFilterDiv,
  StyledSubTitle,
  FooterDiv,
  ScrollToTop,
  ChartContents,
};
