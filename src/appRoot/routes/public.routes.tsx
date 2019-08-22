import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from 'components/Loading/Loading';
import { IComponentRoutes } from './interface';

const Public = lazy(() => import('containers/Public/Public'));

const publicRoutesList = [
  {
    component: Public,
    exact: true,
    id: 'public-id',
    path: '/public',
  },
];

const PublicRoutes: React.FunctionComponent<IComponentRoutes> = ({
  isLoggedIn,
}) => {
  const [publicRoutes, setRootPath] = useState(publicRoutesList);
  useEffect(() => {
    if (!isLoggedIn) {
      let newPaths = publicRoutes;
      const newPath = {
        component: Public,
        exact: true,
        id: 'public-id',
        path: '/',
      };
      newPaths.push(newPath);
      setRootPath(newPaths);
    }
  }, [isLoggedIn, publicRoutes]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          {publicRoutes.map((route: any) => (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}

          {!isLoggedIn && <Route component={() => <h2>404 public</h2>} />}
        </Switch>
      </Suspense>
    </>
  );
};

export default PublicRoutes;
