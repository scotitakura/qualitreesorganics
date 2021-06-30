import React, { Component } from 'react';
import products from "../../../data/shop.json";
import productcategory from "../../../data/category.json";
import Slider from 'react-slick';
import { Rating, fetchFlavorIcon } from '../../../helper/helper'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    next() {
        this.slider1.slickNext();
    }
    previous() {
        this.slider1.slickPrev();
    }
    render() {
        const settings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            centerPadding: '9px',
            centerMode: true,
            focusOnSelect: true,
            responsive: [
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
        };
        const settingsThumb = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            focusOnSelect: true,
            fade: true,
        }
        return (
            <section className="product-section product-shop-section pt-120 pb-120">
                <div className="container">
                    <div className="product-section-heading-wrapper">
                        <div className="product-section-heading section-title both-border">
                            <span className="title-tag">Explore Populare Strain</span>
                            <h3 className="wow fadeIn">The guide is to familiarize you with CannaWeed</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-shop-product-slider-arrow">
                                <div className="product-shop-product-left-arrow" onClick={this.previous}>
                                    <span><i className="fas fa-chevron-left" /></span>
                                </div>
                                <div className="product-shop-product-right-arrow" onClick={this.next}>
                                    <span><i className="fas fa-chevron-right" /></span>
                                </div>
                            </div>
                            <Slider className="product-shop-product-slider" {...settings} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}>
                                {products.map((item, i) => (
                                    <div key={i} className="product-slider-wrapper">
                                        <div className="product-slider-element">
                                            {item.category.slice(0, 1).map((category) => (
                                                productcategory.filter(item => {
                                                    return item.id === category
                                                }).map((categories, i) => (
                                                    <span key={i} className="product-strain-class-dark">{categories.title}</span>
                                                ))
                                            ))}
                                            <h4>{item.shorttitle}</h4>
                                            <p>{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <Slider className="product-shop-details" {...settingsThumb} asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)}>
                        {products.map((item, i) => (
                            <div key={i} className="wd-category-detail">
                                <div className="row">
                                    <div className="col-lg-5 col-md-12">
                                        <div className="product-shop-product-image">
                                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} className="img-fluid d-block mx-auto" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-12">
                                        <div className="product-shop-details-container">
                                            <div className="product-shop-details-title-wrapper">
                                                <div className="product-shop-product-review-star">
                                                    <div className="rating-star">
                                                        {Rating(item.rating)}
                                                        5.54
                                                        <span className="product-primary-color">(5k Reviews)</span>
                                                    </div>
                                                </div>
                                                <div className="product-shop-product-title">
                                                    <h3>{item.title} <span className="product-product-tag">{item.shorttitle}</span></h3>
                                                    <p className="des-text">{item.shortdescription}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="product-product-features pb-0">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-12">
                                                    <div className="product-product-effects product-margin-30">
                                                        <h5>Effects</h5>
                                                        {item.effects.map((effect, i) => (
                                                            <div key={i} className="product-product-effects-inner">
                                                                <div className="progress">
                                                                    <div className="progress-bar active" style={{ width: (effect.value) + '%' }}>
                                                                    </div>
                                                                </div>
                                                                <span className="product-product-effect-title">
                                                                    {effect.title}({effect.value})
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-12">
                                                    <div className="product-product-flavors product-margin-30">
                                                        <h5>Character</h5>
                                                        <div className="product-flavors-align">
                                                            {item.character.map((character, i) => (
                                                                <div key={i} className="product-flavors-type">
                                                                    <img src={fetchFlavorIcon(character.icon)} alt={character.title} />
                                                                    <p>{character.title}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-12">
                                                    <div className="product-product-flavors">
                                                        <h5>Flavors</h5>
                                                        <div className="product-flavors-align">
                                                            {item.flavours.map((flavour, i) => (
                                                                <div key={i} className="product-flavors-type">
                                                                    <img src={fetchFlavorIcon(flavour.icon)} alt={flavour.title} />
                                                                    <p>{flavour.title}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Product;