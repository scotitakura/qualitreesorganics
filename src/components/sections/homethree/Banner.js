import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const banner = [
    {
        title: "We Create",
        span1: "Perfect",
        span2: "Brand Life",
        span3: "Value"

    },
    {
        title: "We Create",
        span1: "Perfect",
        span2: "Brand Life",
        span3: "Value"

    },
    {
        title: "We Create",
        span1: "Perfect",
        span2: "Brand Life",
        span3: "Value"

    }
]
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="slick-arrow next-arrow" onClick={onClick}><span>Next<i className="fal fa-long-arrow-right"></i></span>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="slick-arrow prev-arrow" onClick={onClick}><span><i className="fal fa-long-arrow-left" />Prev</span>
        </div>
    );
}
class Banner extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            fade: true,
            arrows: true,
            prevArrow: <SamplePrevArrow />,
            nextArrow: <SampleNextArrow />,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    },
                },
            ]
        }
        return (
            <section className="banner-section banner-style-three banner-slider-two" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/02.jpg)" }}>
                <Slider className="slider-active" id="bannerSliderTwo" {...settings}>
                    {banner.map((item, i) => (
                        <div key={i} className="single-banner">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="banner-text">
                                            <h1>{item.title} <span>{item.span1}</span> {item.span2} <span>{item.span3}</span></h1>
                                            <div className="btn-wrap">
                                                <Link to="/contact" className="main-btn btn-filled">Get Started Now</Link>
                                                <Link to="/about" className="main-btn btn-borderd">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="banner-shape-three">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z">
                        </path>
                    </svg>
                </div>
            </section>
        );
    }
}

export default Banner;