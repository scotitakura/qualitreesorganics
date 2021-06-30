import React, { Component } from 'react';
import $ from 'jquery'
import 'magnific-popup'

class Video extends Component {
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
            <section className="video-section video-style-two" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/video-bg-2.jpg)" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="video-text text-center">
                                <div className="video-link-two">
                                    <a rel={'external'} className="popup-video" href={"https://www.youtube.com/embed/pbiEfJd2Hpw"}><i className="fas fa-play" /></a>
                                </div>
                                <p>These values give us the foundations we need</p>
                                <h1>our values is only hard working</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Video;