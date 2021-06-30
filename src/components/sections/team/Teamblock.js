import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import teamblock from '../../../data/author.json';

class Teamblock extends Component {
    render() {
        return (
            <section className="team-section pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center team-loop">
                        {teamblock.map((item, i) => (
                            <div key={i} className="col-lg-4 col-sm-6">
                                <div className="member-box">
                                    <div className="member-img">
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} />
                                    </div>
                                    <div className="member-info">
                                        <h3>{item.name}</h3>
                                        <span>{item.designation} </span>
                                    </div>
                                    <Link to={"/team-details/" + item.id} className="socail-trigger">+</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Teamblock;