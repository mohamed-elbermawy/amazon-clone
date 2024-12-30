import { Fragment } from 'react';

// components
import Header from '../../components/header';
import Footer from '../../components/footer';

// pages
import Home from '../../pages/home';
import Products from '../../pages/products';
import SingleProduct from '../../pages/singleProduct';

const MainLayout = () => {
  return (
    <Fragment>
      <Header />
      <hr />
      <Home />
      <hr />
      <Products />
      <hr />
      <SingleProduct />
      <hr />
      <Footer />
    </Fragment>
  )
}

export default MainLayout;
