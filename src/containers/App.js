import React from 'react';
import styled from 'styled-components/macro';

const App = () => {
  return <AppWrapper />;
};

const AppWrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  width: 100vw;
  font-size: calc(10px + 2vmin);
`;

export default App;
