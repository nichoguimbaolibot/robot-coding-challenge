import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from 'components/Loading/Loading';
import { IComponentRoutes } from './interface';

const RobotSimulation = lazy(() => import('containers/RobotSimulation'));

const privateRoutesList = [
  {
    component: RobotSimulation,
    exact: true,
    id: 'robot-simulation-id',
    path: '/robot/simulation',
  },
];

const PrivateRoutes: React.FunctionComponent<IComponentRoutes> = ({
  isLoggedIn,
}) => {
  const [privateRoutes, setRootPath] = useState(privateRoutesList);
  useEffect(() => {
    if (isLoggedIn) {
      const newPath = [
        ...privateRoutesList,
        {
          component: RobotSimulation,
          exact: true,
          id: 'home-id',
          path: '/',
        },
      ];
      setRootPath(newPath);
    }
  }, [isLoggedIn]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          {privateRoutes.map((route: any) => (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}

          {isLoggedIn && <Route component={() => <h2>404 private</h2>} />}
        </Switch>
      </Suspense>
    </>
  );
};

export default PrivateRoutes;
