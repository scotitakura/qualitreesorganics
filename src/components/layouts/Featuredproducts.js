import React, { Component } from 'react';
import shopblock from '../../data/shop.json';
import shopcategory from '../../data/category.json';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import Quickview from './Quickview'

class Featuredproducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
            lastActiveBox: -1,
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    // Modal
    modalShow(index) {
        this.setState({ modalshow: true, lastActiveBox: index });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }
    render() {
        const settings = {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            centerPadding: '9px',
            centerMode: false,
            arrows: false,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },

            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }

            ]
        }
        return (
            <div className="container">
                <div className="cw-section-heading-wrapper">
                    <div className="cw-section-heading">
                        <h3 className="wow fadeIn">Featured Products</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="cw-shop-product-bottom-arrow">
                            <div className="cw-product-bottom-left-arrow" onClick={this.previous}>
                                <span><i className="fas fa-chevron-left" /></span>
                            </div>
                            <div className="cw-product-bottom-right-arrow" onClick={this.next}>
                                <span><i className="fas fa-chevron-right" /></span>
                            </div>
                        </div>
                        <Slider className="slider-shop-accer" {...settings} ref={c => (this.slider = c)}>
                            {shopblock.map((item, i) => (
                                <div key={i} className="slider-product-wrapper">
                                    <div className="product-grid">
                                        {item.category.slice(0, 1).map((category) => (
                                            shopcategory.filter(item => {
                                                return item.id === category
                                            }).map((category, i) => (
                                                <div key={i} className={"product-item-top " + category.title}>
                                                    <div className="product-type">- {category.title} -</div>
                                                    <div className="strain-type" />
                                                </div>
                                            ))
                                        ))}
                                        <div className="product-image4">
                                            <Link to={"/shop-details/" + item.id}>
                                                <img className="pic-1" src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                            </Link>
                                            <ul className="social">
                                                <li><Link to="#" data-tip="Quick View" onClick={(e) => this.modalShow(item.id)}><i className="fa fa-eye" /></Link></li>
                                                <li><Link to="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></Link></li>
                                                <li><Link to="#" data-tip="Add to Favourite"><i className="fas fa-heart" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4 className="title"><Link to={"/shop-details/" + item.id}>{item.shorttitle}</Link></h4>
                                            <p>{item.title}</p>
                                            <div className="price">
                                                {
                                                    item.discount > 0 || item.discount !== '' ? <span>${new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}</span> : ''
                                                }
                                                <span>${new Intl.NumberFormat().format((item.price).toFixed(2))}</span>
                                            </div>
                                            <Link className="add-to-cart" to={"/shop-details/" + item.id}>ADD TO CART</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <Modal show={this.state.modalshow} className="w-quick-view" id="quickViewSnap" onHide={this.modalClose} aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Header closeButton></Modal.Header>
                    <Quickview productId={this.state.lastActiveBox} />
                </Modal>
            </div>
        );
    }
}

export default Featuredproducts;