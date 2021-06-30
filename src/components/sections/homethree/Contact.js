import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import client from '../../../data/client.json'

class Contact extends Component {
    render() {
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
            <section className="contact-section pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 col-sm-7">
                            <div className="section-title left-border">
                                <span className="title-tag">Get In Touch</span>
                                <h2>Get Catch us from here. right now</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-sm-5 d-none d-sm-block">
                            <div className="contact-page-link text-right">
                                <Link to="#" className="main-btn btn-filled">get direction</Link>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-wrapper mt-80 mb-110">
                        <div className="row no-gutters align-items-center align-items-lg-start justify-content-center">
                            <div className="col-lg-5 col-md-5">
                                <div className="contact-info-list">
                                    <div className="info-box">
                                        <div className="icon">
                                            <i className="pe-7s-home" />
                                        </div>
                                        <div className="content">
                                            <h4>Office Address</h4>
                                            <p>19/A, Cirikon City hall Tower <br /> New York, NYC</p>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="icon">
                                            <i className="pe-7s-call" />
                                        </div>
                                        <div className="content">
                                            <h4>Phone Number</h4>
                                            <p>+987 876 7765 76 519 <br /> 987 (876) 76 78 89 9</p>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="icon">
                                            <i className="pe-7s-comment" />
                                        </div>
                                        <div className="content">
                                            <h4>Email address</h4>
                                            <p>info@yourwebsite.com <br /> jobs.example@mail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="contact-form">
                                    <form>
                                        <div className="row padding-custom">
                                            <div className="col-12 col-lg-6">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-user" />
                                                    </div>
                                                    <input type="text" placeholder="Your name" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-envelope" />
                                                    </div>
                                                    <input type="email" placeholder="Your email" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-phone" />
                                                    </div>
                                                    <input type="text" placeholder="Your Phone" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="input-group textarea mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-edit" />
                                                    </div>
                                                    <textarea placeholder="Enter message" />
                                                </div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button type="submit" className="main-btn btn-filled">Get A QUote</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clinet-section">
                    <div className="container-fluid custom-width-three">
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

export default Contact;