import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import straincategories from '../../../data/straincategory.json'
import strain from '../../../data/strain.json'

class Strainslider extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            speed: 900,
            centerPadding: '25%',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        centerPadding: '20%',
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: '10%',
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        centerPadding: '5%',
                    },
                },
                {
                    breakpoint: 400,
                    settings: {
                        centerPadding: '0',
                    },
                },
            ]
        }
        return (
            <section className="cannafolio-slider-section pb-120">
                <div className="container-fluid">
                    {/* cannafolio loop */}
                    <Slider className="row cannafolio-slider-loop cannafolio-slider" {...settings}>
                        {strain.map((item, i) => (
                            <div key={i} className="col-12">
                                <div className="cannafolio-box">
                                    <div className="cannafolio-img-wrap">
                                        <div className="cannafolio-img" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.slideimg + ")" }}>
                                        </div>
                                    </div>
                                    <div className="cannafolio-desc">
                                        {item.category.slice(0, 1).map((category) => (
                                            straincategories.filter(item => {
                                                return item.id === category
                                            }).map((categories, i) => (
                                                <span key={i} className="cannafolio-cat">{categories.title}</span>
                                            ))
                                        ))}
                                        <h2><Link to={"/strain-details/" + item.id}>{item.title} </Link></h2>
                                        <Link to={"/strain-details/" + item.id} className="cannafolio-link">
                                            <i className="fal fa-arrow-right" />
                                        </Link>
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

export default Strainslider;