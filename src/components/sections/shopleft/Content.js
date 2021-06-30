import React, { Component, Fragment } from 'react';
import Shopblock from './Shopblock';
import Featuredproducts from '../../layouts/Featuredproducts';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Shopblock />
                <section className="cw-section cw-shop-section bg-gradient pt-120 pb-120">
                    <Featuredproducts />
                </section>
            </Fragment>
        );
    }
}

export default Content;