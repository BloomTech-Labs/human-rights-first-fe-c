import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  height: 21vh;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  top: 0;
  width: 100vw;
  margin-bottom: -2.2%;
  padding: 0% 15%;
  z-index: 100;
  opacity: 80%;
  border-bottom: 2px solid gray;
`;

const StyledDiv = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { StyledHeader, StyledDiv };
