import React, { Component } from 'react';
import $ from 'jquery'
import 'magnific-popup'

class Banner extends Component {
    componentDidMount() {
        function popup() {
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        }
        popup()
    }
    render() {
        return (
            <section className="banner-section banner-style-two">
                <div className="single-banner">
                    <div className="container-fluid custom-container-two">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="banner-img">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/banner/circle-icon.png"} alt="icon" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="banner-text">
                                    <a rel={'external'} className="video-icon popup-video" href={"https://www.youtube.com/embed/pbiEfJd2Hpw"}><i className="fas fa-play" /></a>
                                    <h1>Organic Medical Cannabis . </h1>
                                    <p>Bringing health and happiness to you .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;