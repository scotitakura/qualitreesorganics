import React, { Component, Fragment } from 'react';
import Teamblock from './Teamblock';
import Categories from '../home/Categories';
import Skills from './Skills';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Teamblock/>
                <Categories/>
                <Skills/>
            </Fragment>
        );
    }
}

export default Content;