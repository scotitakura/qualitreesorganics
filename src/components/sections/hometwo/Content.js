import React, { Component, Fragment } from 'react';
import About from './About';
import Banner from './Banner';
import Cta from './Cta';
import Services from './Services';
import Product from '../home/Product';
import Filterproduct from '../home/Filterproduct';
import Whyus from './Whyus';
import Video from './Video';
import Team from './Team';
import Skills from './Skills';
import Strains from './Strains';
import Testimonials from './Testimonials';
import Blogpost from './Blogpost';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <About />
                <Services />
                <Cta />
                <Product />
                <Whyus />
                <Video />
                <Team />
                <div style={{ marginTop: "-120px" }}>
                    <Filterproduct />
                </div>
                <Skills/>
                <Strains/>
                <Testimonials/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;