import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headertwo';
import Footer from '../layouts/Footertwo';
import Content from '../sections/hometwo/Content';

const pagelocation = 'Homepage'

class Hometwo extends Component {
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
                <Footer footer={{ style:"", logo:"assets/img/logo-white.png" }}/>
            </Fragment>
        );
    }
}

export default Hometwo;