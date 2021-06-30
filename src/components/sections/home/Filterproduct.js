import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import products from "../../../data/shop.json";
import productcategory from "../../../data/category.json";
import Masonry from 'react-masonry-component';

class Filterproduct extends Component {
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
            <div key={i} className="col-md-4 col-sm-12 masonry-item">
                <div className="cw-q-shop-product-inner" style={{ marginBottom: "30px" }}>
                    <div className="cw-shop-img-overlay">
                        <div className="cw-q-shop-product-image">
                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} className="mx-auto d-block" />
                        </div>
                        <div className="cw-q-shop-product-meta">
                            {item.category.slice(0, 1).map((category) => (
                                productcategory.filter(item => {
                                    return item.id === category
                                }).map((categories, i) => (
                                    <span key={i}>{categories.title}</span>
                                ))
                            ))}
                            <h4>{item.title}</h4>
                            <p>${new Intl.NumberFormat().format((item.price).toFixed(2))}</p>
                            <div className="d-sm-block d-lg-none">
                                <Link to={"/shop-details/" + item.id} className="main-btn btn-filled">Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className="button"><Link to={"/shop-details/" + item.id} className="main-btn btn-filled">Add To Cart</Link></div>
                </div>
            </div>
        ));
        return (
            <section className="cw-quick-shop-section pt-120 pb-120">
                <div className="container">
                    <div className="cw-section-heading-wrapper">
                        <div className="cw-section-heading section-title both-border">
                            <span className="title-tag">Our Products</span>
                            <h3 className="wow fadeIn">Rio is a bright sativa with a citrusy taste</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cw-q-shop-tabs">
                                <ul className="nav nav-pills mb-3 justify-content-center">
                                    <li className="nav-item">
                                        <Link to="#" className={this.state.activeItem === -1 ? 'nav-link active' : 'nav-link'} onClick={this.handleClick.bind(this, -1)}>All Products</Link>
                                    </li>
                                    {productcategory.map((item) => (
                                        <li key={item.id} className="nav-item">
                                            <Link to="#" className={this.state.activeItem === parseInt(item.id) ? 'nav-link active' : 'nav-link'} onClick={this.handleClick.bind(this, item.id)}>{item.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="cw-q-shop-product">
                                    <Masonry className="row justify-content-center" imagesLoadedOptions={imagesLoadedOptions}>
                                        {renderAll}
                                    </Masonry>
                                </div>
                            </div>
                            <div className="cw-shop-main-btn text-center">
                                <Link to="/shop" className="main-btn btn-filled">Visit Store</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Filterproduct;