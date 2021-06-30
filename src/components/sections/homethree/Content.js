import React, { Component, Fragment } from 'react';
import About from './About';
import Banner from './Banner';
import Serviceblock from './Serviceblock';
import Services from './Services';
import Product from '../home/Product';
import Strainslider from '../home/Strainslider';
import Filterproduct from '../home/Filterproduct';
import Cta from './Cta';
import Team from './Team';
import Video from './Video';
import Contact from './Contact';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Services />
                <About />
                <Serviceblock />
                <Product />
                <div style={{ paddingTop: "120px" }} />
                <Strainslider />
                <Cta/>
                <Team/>
                <div style={{ marginTop: "-120px" }} />
                <Filterproduct/>
                <Video/>
                <Contact/>
            </Fragment>
        );
    }
}

export default Content;