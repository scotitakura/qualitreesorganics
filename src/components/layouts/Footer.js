import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Backtotop from './Backtotop';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Backtotop/>
                <footer className="footer-style-two">
                    <div className="footer-widget-area">
                        <div className="container">
                            <div className="foter-logo text-center">
                                <img src="assets/img/logo-white.png" alt="Cannaweed" />
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-6 order-1">
                                    <div className="widget about-widget">
                                        <h3 className="widget-title">About Us</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-8 order-3 order-lg-2">
                                    <div className="widget getin-widget">
                                        <h3 className="widget-title">Get In touch</h3>
                                        <ul>
                                            <li>+987 876 765 87 67 6</li>
                                            <li>info@webexample.com</li>
                                            <li>14/Browni City Tower Hall <br /> New York, US </li>
                                        </ul>
                                        <Link to="#" className="getin-btn">Get Direction</Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 order-2 order-lg-3">
                                    <div className="widget nav-widget">
                                        <h3 className="widget-title">What We Do</h3>
                                        <ul>
                                            <li><Link to="#">CBD Oil</Link></li>
                                            <li><Link to="#">Medical Cannabis </Link></li>
                                            <li><Link to="#">Edibles</Link></li>
                                            <li><Link to="#">Topicals</Link></li>
                                            <li><Link to="#">Cannabis Extract </Link></li>
                                            <li><Link to="#">Cannabis Accesories </Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <p className="copyrigt-text text-center text-md-left">Copyright By@<Link to="#">yourwebsite</Link> - 2021
          </p>
                                </div>
                                <div className="col-md-7">
                                    <div className="social-icon text-center text-md-right">
                                        <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link to="#"><i className="fab fa-twitter" /></Link>
                                        <Link to="#"><i className="fab fa-behance" /></Link>
                                        <Link to="#"><i className="fab fa-linkedin" /></Link>
                                        <Link to="#"><i className="fab fa-youtube" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;