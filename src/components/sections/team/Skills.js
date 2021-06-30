import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <section className="skills-section bg-transparent pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-10">
                            <div className="skill-bars">
                                <div className="section-title mb-60 left-border">
                                    <span className="title-tag">skillset</span>
                                    <h2> Check Skillset &amp; Behaviour </h2>
                                </div>
                                <div className="skill-progress mb-45">
                                    <div className="title d-flex justify-content-between">
                                        <span>Consulting &amp; Marketing</span>
                                        <span>72%</span>
                                    </div>
                                    <div className="progressbar-wrap">
                                        <div className="progressbar" data-width={72} style={{ width: "72%" }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-progress mb-45">
                                    <div className="title d-flex justify-content-between">
                                        <span>medical cannabis and schemes</span>
                                        <span>81%</span>
                                    </div>
                                    <div className="progressbar-wrap">
                                        <div className="progressbar" data-width={81} style={{ width: "81%" }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-progress">
                                    <div className="title d-flex justify-content-between">
                                        <span>customer icons</span>
                                        <span>72%</span>
                                    </div>
                                    <div className="progressbar-wrap">
                                        <div className="progressbar" data-width={45} style={{ width: "45%" }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-10">
                            <div className="skill-img text-right">
                                <img src={process.env.PUBLIC_URL + "/assets/img/skill-img-2.jpg"} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;