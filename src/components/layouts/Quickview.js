import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Dropdown } from 'react-bootstrap';
import { getProduct } from '../../helper/Producthelper';
import { Rating } from '../../helper/helper';
import shopcategory from '../../data/category.json';
import blogtags from '../../data/blogtags.json';


class Quickview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    };

    DecreaseItem = () => {
        if (this.state.clicks < 1) {
            this.setState({
                clicks: 0,
            });
        } else {
            this.setState({
                clicks: this.state.clicks - 1,
            });
        }
    };
    handleChange(event) {
        this.setState({ clicks: event.target.value });
    }
    render() {
        const productId = this.props.productId;
        const item = getProduct(productId);
        return (
            <Modal.Body>
                <div className="row">
                    <div className="col-md-5">
                        <div className="w-quick-view-img">
                            <img src={process.env.PUBLIC_URL+"/"+item.image[0]} className="w-product-slider-main img-responsive" alt={item.title} />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="cw-product-des-wrapper cw-model-wrapper">
                            <div className="cw-shop-details-container hybrid">
                                <div className="cw-shop-details-title-wrapper">
                                    {item.category.slice(0, 1).map((category) => (
                                        shopcategory.filter(item => {
                                            return item.id === category
                                        }).map((category, i) => (
                                            <div key={i} className={"cw-product-meta-icon " + category.title}>
                                                <div className="strain-type" />
                                                <span className="strain-name">- {category.title} -</span>
                                            </div>
                                        ))
                                    ))}
                                    <div className="cw-shop-product-review-star">
                                        <div className="rating-star">
                                            {Rating(item.rating)}
                                                5.54 <span className="cw-primary-color">(5k Reviews)</span>
                                        </div>
                                    </div>
                                    <div className="cw-shop-product-title">
                                        <h3>{item.title} <span className="cw-product-tag">{item.shorttitle}</span></h3>
                                        <p>{item.shortdescription}</p>
                                        <div className="cw-shop-product-meta">
                                            <div className="cw-shop-product-meta-content">
                                                <div className="cw-product-stock">
                                                    <p>Avability: </p>
                                                    {item.stock === true ? <p className="cw-instock">In Stock</p> : <p className="cw-instock text-danger">Out of Stock</p>}

                                                </div>
                                                <div className="cw-product-price price">
                                                    <p>Price: </p>
                                                    {
                                                        item.discount > 0 || item.discount !== '' ? <span>${new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}</span> : ''
                                                    }
                                                    <span>${new Intl.NumberFormat().format((item.price).toFixed(2))}</span>
                                                </div>
                                            </div>
                                            <div className="cw-product-qty">
                                                <div className="cw-order-qty">
                                                    <p>Quantity</p>
                                                    <div className="input-group">
                                                        <span className="input-group-btn">
                                                            <button type="button" className="quantity-left-minus btn btn-number" onClick={this.DecreaseItem}>
                                                                <i className="fa fa-minus" />
                                                            </button>
                                                        </span>
                                                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value={this.state.clicks} onChange={this.handleChange.bind(this)} />
                                                        <span className="input-group-btn">
                                                            <button type="button" className="quantity-right-plus btn btn-number" onClick={this.IncrementItem}>
                                                                <i className="fa fa-plus" />
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                                <Dropdown className="dropdown cw-unit">
                                                    <p>Unit</p>
                                                    <Dropdown.Toggle id="weight-btn-2">Ounces</Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu">
                                                        <Link className="dropdown-item weight-btn-2" data-unit="g" to="#">Grams</Link>
                                                        <Link className="dropdown-item weight-btn-2" data-unit="oz" to="#">Ounces</Link>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className="cw-shop-product-action">
                                            <div className="cw-product-btn">
                                                <button className="main-btn btn-filled">Add To Cart</button>
                                            </div>
                                            <div className="cw-shop-product-share">
                                                <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                                <Link to="#"><i className="fab fa-twitter" /></Link>
                                                <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                                                <Link to="#"><i className="fab fa-instagram" /></Link>
                                                <Link to="#"><i className="fab fa-pinterest" /></Link>
                                            </div>
                                        </div>
                                        <div className="cw-shop-product-bottom-meta">
                                            <div className="cw-shop-tags-meta">
                                                <span><strong>Tags:</strong>
                                                    {item.tags.slice(0, 3).map((tag) => (
                                                        blogtags.filter(item => {
                                                            return item.id === tag
                                                        }).map((tags, i) => (
                                                            <Link to={"/blog/cat/" + tags.id} key={i}>{tags.title}, </Link>
                                                        ))
                                                    ))}
                                                </span>
                                            </div>
                                            <div className="cw-shop-catg-meta">
                                                <span><strong>Category:</strong>
                                                    {item.category.slice(0, 3).map((category) => (
                                                        shopcategory.filter(item => {
                                                            return item.id === category
                                                        }).map((category, i) => (
                                                            <Link to={"/shop/cat/" + category.id} key={i}>{category.title}</Link>
                                                        ))
                                                    ))}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        );
    }
}

export default Quickview;