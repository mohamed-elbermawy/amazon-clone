import { Fragment } from 'react';

// pages
import Login from '../../pages/login';
import Register from '../../pages/register';

const AuthLayout = () => {
  return (
    <Fragment>
      <Login />
      <Register />
    </Fragment>
  );
}

export default AuthLayout;
