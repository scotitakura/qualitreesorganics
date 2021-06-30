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
        const renderAll = this.state.filteredProducts.slice(0,5).map((item, i) => (
            <div key={i} className="col-lg-4 col-sm-6 masonry-item">
                <div className="cannafolio-box">
                    <div className="cannafolio-img" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }} />
                    <div className="cannafolio-desc">
                        {item.category.slice(0, 1).map((category) => (
                            productcategory.filter(item => {
                                return item.id === category
                            }).map((categories, i) => (
                                <span key={i} className="cannafolio-cat">{categories.title}</span>
                            ))
                        ))}
                        <h4><Link to={"/strain-details/" + item.id}>{item.title} </Link></h4>
                    </div>
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
                        <Masonry className="row cannafolio-masonary-loop masonry-items" imagesLoadedOptions={imagesLoadedOptions}>
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