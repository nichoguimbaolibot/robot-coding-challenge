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
  isLoggedIn = true,
}) => {
  const [privateRoutes, setRootPath] = useState(new Array());
  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn);
    if (isLoggedIn) {
      let newPaths = privateRoutesList;
      const newPath = {
        component: RobotSimulation,
        exact: true,
        id: 'robot-simulation-id',
        path: '/',
      };
      newPaths.push(newPath);
      console.log('newPaths', newPaths);
      setRootPath(newPaths);
    }
  }, [isLoggedIn]);

  console.log('privateRoutes', privateRoutes);

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

          {!isLoggedIn && <Route component={() => <h2>404 private</h2>} />}
        </Switch>
      </Suspense>
    </>
  );
};

export default PrivateRoutes;
