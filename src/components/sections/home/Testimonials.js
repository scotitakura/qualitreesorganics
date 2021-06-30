import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import testimonial from '../../../data/testimonial.json'
import client from '../../../data/client.json'

class Testimonials extends Component {
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
        };
        const clientSettings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]
        }
        return (
            <section className="testimonials-clinet-section pt-120 pb-120">
                <div className="container">
                    <div className="section-title both-border text-center pb-80">
                        <span className="title-tag">Testimonials</span>
                        <h2>Client Feedbacks</h2>
                    </div>
                    <div className="testimonials-section pb-125">
                        <Slider className="testimonials-slider-two row" {...settings}>
                            {testimonial.map((item, i) => (
                                <div key={i} className="col-lg-12">
                                    <div className="single-testimonial-two">
                                        <p>{item.comment}</p>
                                        <div className="testimonial-author">
                                            <div className="author-img">
                                                <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} />
                                            </div>
                                            <div className="author-info">
                                                <h5>{item.name}</h5>
                                                <span>{item.designation}</span>
                                            </div>
                                        </div>
                                        <span className="quote-icon">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/testimonials/quote.png"} alt="icon" />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="clinet-section">
                    <div className="container-fluid custom-container-one">
                        <Slider className="clinet-slider" {...clientSettings}>
                            {client.map((item, i) => (
                                <div key={i} className="clinet-item">
                                    <Link to="#">
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.companyname} />
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;