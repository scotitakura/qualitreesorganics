import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const fetaure = [
    {
        extclass: "",
        icon: "fas fa-paper-plane",
        title: "Our Mission",
        text: "Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor"
    },
    {
        extclass: "mt-30",
        icon: "fas fa-globe",
        title: "Our Vision",
        text: "Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor"
    },
    {
        extclass: "mt-30",
        icon: "fas fa-users",
        title: "Our Approch",
        text: "Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor"
    },
    {
        extclass: "mt-30",
        icon: "fas fa-cogs",
        title: "Our Strategy",
        text: "Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor"
    }
]

class Features extends Component {
    render() {
        const imagesLoadedOptions = {
            itemSelector: '.masonry-item',
            percentPosition: true,
            resize: true,
            fitWidth: true
        };
        return (
            <section className="features-boxes-two pt-180 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="features-boxes-loop">
                                {/* Loop start */}
                                <Masonry className="row fetaure-masonary" imagesLoadedOptions={imagesLoadedOptions}>
                                    {fetaure.map((item, i) => (
                                        <div key={i} className="col-md-6 col-sm-6 masonry-item">
                                            <div className={"feature-box-two text-center " + item.extclass}>
                                                <div className="icon text-center">
                                                    <i className={item.icon} />
                                                </div>
                                                <h4>our strategy</h4>
                                                <p>{item.text}</p>
                                                <span className="count">0{1 + i}</span>
                                            </div>
                                        </div>
                                    ))}
                                </Masonry>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="feature-text pl-50">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">COLLABRATION WITH US</span>
                                    <h2>Dedicated Medical Cannabis Farming with 25 Years Experience.</h2>
                                </div>
                                <p>Over the years, a wide range of developments and innovations in the Medical Cannabis have led
                                to many new Cannabis Firm and services being produced. Moreover, there is need for IT
                                today, not just in urban areas but rural regions as well.
          </p>
                                <ul className="feature-icon mt-40">
                                    <li>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/services/icon-1.png"} alt="icon" />
                                        <h6>Expert Staff's Support</h6>
                                    </li>
                                    <li>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/services/icon-3.png"} alt="icon" />
                                        <h6>Expert Staff's Support</h6>
                                    </li>
                                </ul>
                                <Link to="/services" className="main-btn btn-filled mt-40">Our Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;