import React, { Fragment } from 'react';
import Routes from './routes';
import GlobalStyle from './assets/globaltheme/globalstyle';

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
};

export default App;
