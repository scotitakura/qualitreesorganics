import React, { Component, Fragment } from 'react';
import Blogpost from '../home/Blogpost'
import Abouttext from './Abouttext';
import Counter from './Counter';
import Framework from './Framework';
import Serviceblock from './Serviceblock';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Abouttext/>
                <Serviceblock/>
                <Framework/>
                <Counter/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;