import { Fragment } from 'react';

// ** Router Outlet
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export default AuthLayout;
