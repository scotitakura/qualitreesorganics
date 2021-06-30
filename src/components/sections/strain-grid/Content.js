import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import productcategory from '../../../data/straincategory.json'
import products from '../../../data/strain.json'
import Masonry from 'react-masonry-component';
import Cta from '../strain-slider/Cta';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts: products,
            activeItem: -1
        };
    }
    handleClick = id => {
        let filteredProducts = [];
        if (id === -1) {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(
                (product) => product.category.includes(id)
            );
        }
        this.setState({ filteredProducts, activeItem: id });
    };
    render() {
        const imagesLoadedOptions = {
            itemSelector: '.masonry-item',
            percentPosition: true,
            resize: true,
            fitWidth: true
        };
        const renderAll = this.state.filteredProducts.map((item, i) => (
            <div key={i} className="col-lg-4 col-sm-6 masonry-item">
                <div className="cannafolio-grid-box">
                    <div className="cannafolio-img" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }} />
                    <Link to={"/strain-details/" + item.id} className="cannafolio-link">
                        <i className="far fa-expand" />
                    </Link>
                </div>
            </div>
        ));
        return (
            <Fragment>
                <section className="cannafolio-section pt-120 pb-90">
                    <div className="container">
                        {/* cannafolio filter */}
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="cannafolio-filter grid-filter">
                                    <ul>
                                        <li className={this.state.activeItem === -1 ? 'active' : ''} onClick={this.handleClick.bind(this, -1)}>All works</li>
                                        {productcategory.map((item) => (
                                            <li key={item.id} className={this.state.activeItem === parseInt(item.id) ? 'active' : ''} onClick={this.handleClick.bind(this, item.id)}>
                                                {item.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* cannafolio loop */}
                        <Masonry className="row cannafolio-grid-loop grid-isotope" imagesLoadedOptions={imagesLoadedOptions}>
                            {renderAll}
                        </Masonry>
                    </div>
                </section>
                <Cta />
            </Fragment>
        );
    }
}

export default Content;