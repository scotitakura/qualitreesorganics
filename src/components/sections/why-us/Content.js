import React, { Component, Fragment } from 'react';
import Blogpost from '../home/Blogpost'
import Abouttext from './Abouttext';
import Counter from './Counter';
import Services from './Services';
import Strainslider from './Strainslider';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Abouttext/>
                <Counter/>
                <Services/>
                <Strainslider/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;