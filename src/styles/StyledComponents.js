import styled from 'styled-components';
import { Layout, Menu, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const StyledTitle = styled(Title)`
  width: 100%;
  margin-left: 20px;
  margin-top: 15px;
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
  margin-bottom: -2.2%;
  padding: 0% 10%;
  z-index: 100;
  border-bottom: 2px solid gray;
`;

const StyledDiv = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { StyledNavDiv, StyledTitle, StyledHeader, StyledDiv };
