import { Fragment } from 'react';

// helpers
import Breadcrumbs from './helpers/breadcrumbs';
import Slider from './helpers/slider';
import Details from './helpers/details';
import Pricing from './helpers/pricing';
import Rating from './helpers/rating';
import Comments from './helpers/comments';

const SingleProduct = () => {
  return (
    <Fragment>
      <Breadcrumbs />
      <Slider />
      <Details />
      <Pricing />
      <Rating />
      <Comments />
    </Fragment>
  )
}

export default SingleProduct;
