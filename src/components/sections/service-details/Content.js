import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Button } from 'react-bootstrap';
import blogcategory from '../../../data/blogcategory.json'

class Content extends Component {
    render() {
        return (
            <section className="service-details-wrap pt-150 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="service-details">
                                <div className="thmb mb-50">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/details/01.jpg"} alt="img" />
                                </div>
                                <div className="details-text mb-50">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">health security</span>
                                        <h2>Dedicated Farm with 25 Years Experience in this field.</h2>
                                    </div>
                                    <p className="mb-30">
                                        Once a business owner defined the needs to take a business to the next
                                        level, a decision maker will define a scope, cost and a time frame of the project.[1]
                                        The role of the Medical Cannabis company is to icons and nurture the company from the
                                        very beginning of the project until the end, and deliver the project not only in the
                                        scope, time and cost but also with complete customer satisfaction.
            </p>
                                    <p>
                                        The scope of a project is linked intimately to the proposed business processes and
                                        systems that the project is going to deliver. Regardless of whether the project is to
                                        launch a new product range or discontinue unprofitable parts of the business, the change
                                        will have some impact on business processes and systems. The documentation of your
                                        business processes and system requirements are as fundamental to project scoping as an
                                        architects plans would be to the costing and scoping of the construction of a building.
                                        The most successful cannabis business are always those that are driven by an employee
                                        who has the authority, vision and influence to drive the required changes in a business.
                                        It is highly unlikely that a business owner (decision maker or similar) will realize the
                                        changes unless one has one of these people in the employment. However, the project
                                        leadership role typically requires significant experience and skills which are not
                                        usually found within a company focused on day-to-day operations. Due to this requirement
                                        within more significant business change projects/programs, outside expertise is often
                                        sought from firms which can bring this specific skill set to the company.
            </p>
                                </div>
                                <div className="feature-list-wrap mb-50">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">features</span>
                                        <h2>Why Choose Us</h2>
                                    </div>
                                    <div className="feature-list">
                                        <div className="row align-items-center">
                                            <div className="col-sm-5">
                                                <div className="list-img">
                                                    <img src={process.env.PUBLIC_URL + "/assets/img/details/02.jpg"} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-sm-7">
                                                <div className="list-text">
                                                    <p>The most successful cannabis business are always those that are driven by
                                                    an employee who has the authority, vision and influence to drive the
                      required changes in a business.</p>
                                                    <ul>
                                                        <li><i className="fal fa-check" />Hybrid</li>
                                                        <li><i className="fal fa-check" /> Indica</li>
                                                        <li><i className="fal fa-check" />Sativa</li>
                                                        <li><i className="fal fa-check" /> Cannabis and medical cannabis guidance</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-wrapper">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">faq</span>
                                        <h2>get every answers here</h2>
                                    </div>
                                    <Accordion defaultActiveKey="0" className="faq-accordion faq-loop accordion">
                                        <div className="card">
                                            <Accordion.Collapse eventKey="0" className="collapseparent">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate.
                                                </div>
                                            </Accordion.Collapse>
                                            <div className="card-header">
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                    Under normal circumstances a fee for Medical cannabis ?
                                                    <span className="icon"><span>+</span></span>
                                                </Accordion.Toggle>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <Accordion.Collapse eventKey="1" className="collapseparent">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate.
                                                </div>
                                            </Accordion.Collapse>
                                            <div className="card-header">
                                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                    Under normal circumstances a fee for Medical cannabis ?
                                                    <span className="icon"><span>+</span></span>
                                                </Accordion.Toggle>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <Accordion.Collapse eventKey="2" className="collapseparent">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate.
                                                </div>
                                            </Accordion.Collapse>
                                            <div className="card-header">
                                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                                    Under normal circumstances a fee for Medical cannabis ?
                                                    <span className="icon"><span>+</span></span>
                                                </Accordion.Toggle>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <Accordion.Collapse eventKey="3" className="collapseparent">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate.
                                                </div>
                                            </Accordion.Collapse>
                                            <div className="card-header">
                                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                                    Under normal circumstances a fee for Medical cannabis ?
                                                    <span className="icon"><span>+</span></span>
                                                </Accordion.Toggle>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <Accordion.Collapse eventKey="4" className="collapseparent">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate.
                                                </div>
                                            </Accordion.Collapse>
                                            <div className="card-header">
                                                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                                    Under normal circumstances a fee for Medical cannabis ?
                                                    <span className="icon"><span>+</span></span>
                                                </Accordion.Toggle>
                                            </div>
                                        </div>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            {/* Page Sidebar */}
                            <div className="sidebar">
                                {/* Service cat */}
                                <div className="widget service-cat-widget mb-40">
                                    <h5 className="widget-title">Category</h5>
                                    <ul>
                                        {blogcategory.map((item, i) => (
                                            <li key={i}><Link to={"/blog/cat/" + item.id}>{item.title}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Brouchers widget */}
                                <div className="widget brouchers-widget mb-40">
                                    <h5 className="widget-title">Brouchers</h5>
                                    <ul>
                                        <li><Link to="#"><i className="fas fa-file-pdf" />DOWNLOAD PDF FILE</Link></li>
                                        <li><Link to="#"><i className="fas fa-file-powerpoint" />OUR ISO CERTIFICATES</Link></li>
                                        <li><Link to="#"><i className="fas fa-file-image" />OUR ISO CERTIFICATES</Link></li>
                                    </ul>
                                </div>
                                {/* Contact Widget */}
                                <div className="widget contact-widget mb-40">
                                    <h5 className="widget-title">Contact Us</h5>
                                    <form>
                                        <div className="input-group">
                                            <span className="icon"><i className="fas fa-user" /></span>
                                            <input type="text" placeholder="Enter Your Name" />
                                        </div>
                                        <div className="input-group">
                                            <span className="icon"><i className="fas fa-envelope" /></span>
                                            <input type="email" placeholder="Enter email" />
                                        </div>
                                        <div className="input-group textarea">
                                            <span className="icon"><i className="fas fa-edit" /></span>
                                            <textarea placeholder="Enter message" />
                                        </div>
                                        <div className="text-center mt-20"><button type="submit" className="main-btn btn-filled">Get A
                  QUote</button></div>
                                    </form>
                                </div>
                                {/* Bannner Widget */}
                                <div className="widget banner-ad-widget">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/banner-widget-2.jpg"} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;