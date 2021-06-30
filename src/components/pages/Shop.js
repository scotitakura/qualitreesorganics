import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footertwo';
import Content from '../sections/shop/Content';

const pagelocation = 'Shop'

class Shop extends Component {
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
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />\
                <Content catId={this.props.match.params.catId}/>
                <Footer footer={{ style:"footer-style-three", logo:"assets/img/logo.png" }}/>
            </Fragment>
        );
    }
}

export default Shop;