import React, { Suspense, useState, useEffect, lazy } from 'react';
import Loading from 'components/Loading/Loading';
import PublicRoutes from './public.routes';

interface IBaseRoutes {
  isLoggedIn: boolean;
}

const Routes: React.FunctionComponent<IBaseRoutes> = ({
  isLoggedIn,
}): JSX.Element => {
  const [PrivateRoutes, setRoutes] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      const privateLazy = lazy(() => import('./private.routes'));
      setRoutes(privateLazy);
    }
  }, [isLoggedIn]);

  return (
    <>
      <PublicRoutes isLoggedIn={isLoggedIn} />

      {isLoggedIn && PrivateRoutes && (
        <Suspense fallback={<Loading />}>
          <PrivateRoutes isLoggedIn={isLoggedIn} />
        </Suspense>
      )}
    </>
  );
};

export default Routes;
