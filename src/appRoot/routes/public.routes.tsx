import React, { Fragment, Suspense, lazy, useState, useEffect } from 'react';
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
      const newPaths = publicRoutes;
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
    <Fragment>
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
    </Fragment>
  );
};

export default PublicRoutes;
