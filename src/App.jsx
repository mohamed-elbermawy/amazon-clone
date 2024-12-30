import { Fragment } from "react";

// layouts
import AuthLayout from './layouts/auth';
import MainLayout from './layouts/main';

function App() {

  return (
    <Fragment>
      <AuthLayout />
      <hr />
      <MainLayout />
    </Fragment>
  )
}

export default App;
