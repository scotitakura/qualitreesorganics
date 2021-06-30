import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import category from '../../../data/category.json'

class Categories extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]
        }
        return (
            <section className="services-slider-secton">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5 col-md-8 col-sm-7">
                            <div className="section-title left-border">
                                <span className="title-tag">our categories</span>
                                <h2>see what we do here for our members</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-5 d-none d-sm-block">
                            <div className="service-link text-right">
                                <Link to="#" className="main-btn btn-filled">learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="serive-slider-wrap">
                    <div className="container">
                        {/* Loop start */}
                        <Slider className="services-slider row" {...settings}>
                            {category.map((item, i) => (
                                <div key={i} className="col-lg-12">
                                    <div className="single-slider" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }}>
                                        <h6>
                                            <Link to={"/shop/cat/" + item.id}>{item.title}</Link>
                                        </h6>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default Categories;