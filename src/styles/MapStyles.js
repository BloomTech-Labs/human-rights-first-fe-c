import styled from 'styled-components';

const ClusterMarker = styled.div`
  color: #fff;
  background: #e63946;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 55%;
`;
const MarkerBtn = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  size: 5px;
`;

const IncidentsContainer = styled.div`
  width: 25vw;
  height: 60vh;

  background-color: white;

  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
`;
const IncidentContainer = styled.div`
  height: 60vh;
  overflow: auto;
  padding: 70px 4px 0;

  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
`;

export { ClusterMarker, MarkerBtn, IncidentContainer, IncidentsContainer };
