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
  &:hover {
    cursor: pointer;
  }
`;
const MarkerBtn = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  size: 5px;
`;

const IncidentsContainer = styled.div`
  width: 24vw;
  height: 70vh;

  background-color: white;

  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
`;
const IncidentContainer = styled.div`
  height: 70vh;
  overflow: auto;
  padding: 12px 4px 0;

  border: 1px solid rgb(210, 210, 210);
  boarder-top: none;
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
`;

const ClearIncidentsBtn = styled.div`
  width: 22vw;
  text-align: right;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
`;

export {
  ClusterMarker,
  MarkerBtn,
  IncidentContainer,
  IncidentsContainer,
  ClearIncidentsBtn,
};
