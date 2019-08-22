import React, { FunctionComponent } from 'react';
import Router from './controller';
import Layout from 'components/Layout/Layout';

const App: FunctionComponent<{}> = (): JSX.Element => {
  const isLoggedIn = true;

  return (
    <Layout isLoggedIn={isLoggedIn}>
      <Router isLoggedIn={isLoggedIn} />
    </Layout>
  );
};

export default App;
