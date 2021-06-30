import React, { Component, Fragment } from 'react';
import Features from './Features';
import Framework from './Framework';
import Testimonials from '../home/Testimonials';
import Blogpost from '../home/Blogpost';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Features/>
                <Framework/>
                <Testimonials/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;