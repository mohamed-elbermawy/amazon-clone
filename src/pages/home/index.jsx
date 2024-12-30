import { Fragment } from 'react';

// helpers
import Slider from './helpers/slider';
import Category from './helpers/category';
import ProductSlider from './helpers/productSlider';

const Home = () => {
    return (
        <Fragment>
            <Slider />
            <Category />
            <Category />
            <ProductSlider />
            <Category />
            <Slider />
        </Fragment>
    );
}

export default Home;