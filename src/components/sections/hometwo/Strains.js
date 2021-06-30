import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import straincategories from '../../../data/straincategory.json'
import strain from '../../../data/strain.json'

class Strains extends Component {
    render() {
        return (
            <section className="cannafolio-section pt-120 pb-90">
                <div className="container">
                    <div className="section-title text-center both-border mb-80">
                        <span className="title-tag">cannafolio</span>
                        <h2>Our Strains</h2>
                    </div>
                    {/* cannafolio loop */}
                    <div className="row cannafolio-masonary-loop">
                        {strain.slice(0,5).map((item, i) => (
                            <div key={i} className="col-lg-4 col-sm-6">
                                <div className="cannafolio-box height-extra" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }}>
                                    <div className="cannafolio-desc">
                                        {item.category.slice(0, 1).map((category) => (
                                            straincategories.filter(item => {
                                                return item.id === category
                                            }).map((categories, i) => (
                                                <span key={i} className="cannafolio-cat">{categories.title}</span>
                                            ))
                                        ))}
                                        <h4><Link to={"/strain-details/" + item.id}>{item.title} </Link></h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Strains;