import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Blogpost from './Blogpost';
import Categories from './Categories';
import Cta from './Cta';
import Features from './Features';
import Filterproduct from './Filterproduct';
import Product from './Product';
import Strainslider from './Strainslider';
import Testimonials from './Testimonials';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Product/>
                <Features/>
                <Categories/>
                <Filterproduct/>
                <Cta/>
                <Strainslider/>
                <Testimonials/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;