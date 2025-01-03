import { Fragment } from 'react';

// ** Helpers
import Filter from './helpers/filter';
import SingleProduct from './helpers/Product';

const Products = () => {
  return (
    <Fragment>
      <Filter />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
    </Fragment>
  )
}

export default Products;
