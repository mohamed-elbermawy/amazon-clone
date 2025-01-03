import { Fragment } from 'react';

// ** Components
import Header from '../../components/header';
import Footer from '../../components/footer';

// ** Router Outlet
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  )
}

export default MainLayout;
