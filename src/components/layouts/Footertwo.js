import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Backtotop from './Backtotop';
import blog from '../../data/blog.json'

class Footertwo extends Component {
    render() {
        return (
            <Fragment>
                <Backtotop />
                <footer className={this.props.footer.style}>
                    <div className="footer-top">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-4">
                                    <div className="logo text-center text-sm-left">
                                        <Link to="/">
                                            <img src={process.env.PUBLIC_URL + "/" + this.props.footer.logo} alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="social-icon text-center text-sm-right">
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
                    {/* widgets */}
                    <div className="footer-widget-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="widget nav-widget d-flex justify-content-start">
                                        <div>
                                            <h5 className="widget-title">Company</h5>
                                            <ul>
                                                <li><Link to="#">About</Link></li>
                                                <li><Link to="#">Hybrid</Link></li>
                                                <li><Link to="#">Blog</Link></li>
                                                <li><Link to="#">Careers</Link></li>
                                                <li><Link to="#">Partners</Link></li>
                                                <li><Link to="#">Referral Program</Link></li>
                                                <li><Link to="#">Press</Link></li>
                                                <li><Link to="#">Legal</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget nav-widget d-flex justify-content-start justify-content-lg-center">
                                        <div>
                                            <h5 className="widget-title">Community</h5>
                                            <ul>
                                                <li><Link to="#">Accesories</Link></li>
                                                <li><Link to="#">Seeds</Link></li>
                                                <li><Link to="#">Q&amp;A</Link></li>
                                                <li><Link to="#">Write for DOnations</Link></li>
                                                <li><Link to="#">Indica</Link></li>
                                                <li><Link to="#">Pre-Role</Link></li>
                                                <li><Link to="#">Shop Swag</Link></li>
                                                <li><Link to="#">Cannabis Accesories </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget nav-widget d-flex justify-content-start justify-content-lg-center">
                                        <div>
                                            <h5 className="widget-title">Solutions</h5>
                                            <ul>
                                                <li><Link to="#">CBD Oil</Link></li>
                                                <li><Link to="#">Medical Cannabis </Link></li>
                                                <li><Link to="#">Edibles</Link></li>
                                                <li><Link to="#">Topicals</Link></li>
                                                <li><Link to="#">Cannabis Extract </Link></li>
                                                <li><Link to="#">Cannabis Accesories </Link></li>
                                                <li><Link to="#">Cannabis for health</Link></li>
                                                <li><Link to="#">Hybrid</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="widget recent-post">
                                        <div>
                                            <h5 className="widget-title">news feeds</h5>
                                            <div className="post-loop">
                                                {blog.slice(0, 3).map((item, i) => (
                                                    <div key={i} className="post">
                                                        <div className="post-img">
                                                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                                        </div>
                                                        <div className="post-desc">
                                                            <span className="time"><i className="fal fa-calendar-alt" /> {item.postdate}</span>
                                                            <h5><Link to={"/blog-details/" + item.id}>{item.title}</Link></h5>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* copyright */}
                    <div className="copy-right-area">
                        <div className="container">
                            <div className="copyrigt-text d-sm-flex justify-content-between">
                                <p>Copyright By@<Link to="#">yourwebsite</Link> - 2021</p>
                                <p>Design By@<Link to="#">yourwebsite</Link> - 2021</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footertwo;