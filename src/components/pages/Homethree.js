import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Footer from '../layouts/Footertwo';
import Content from '../sections/homethree/Content';

const pagelocation = 'Homepage'

class Homethree extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Cannaweed - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Content/>
                <Footer footer={{ style:"footer-style-three", logo:"assets/img/logo.png" }}/>
            </Fragment>
        );
    }
}

export default Homethree;