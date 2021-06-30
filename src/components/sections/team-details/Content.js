import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import teamblock from '../../../data/author.json';
import Strainslider from './Strainslider';

class Content extends Component {
    render() {
        return (
            <Fragment>
                {teamblock.filter(team => { return team.id === parseInt(this.props.teamId) }).map((item, i) => (
                    <Fragment key={i}>
                        <section className="team-details pt-150 pb-120">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 col-md-9">
                                        <div className="member-img">
                                            <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-9">
                                        <div className="member-information">
                                            <div className="member-info-top d-sm-flex align-items-center justify-content-between">
                                                <div className="title">
                                                    <h2>{item.name}</h2>
                                                    <span>{item.designation}</span>
                                                </div>
                                                <div className="link">
                                                    <Link to="#" className="main-btn btn-filled">Get Appointment</Link>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-9 col-md-11">
                                                    <ul className="contact-list">
                                                        {item.contactinfo.map((item, i) => (
                                                            <li key={i}>
                                                                <i className={item.icon} />
                                                                <span className="title">{item.title} : </span>
                                                                {item.text.map((name, i) => (
                                                                    <a rel={'external'} href={name} key={i}>{name},</a>
                                                                ))}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <ul className="social-list">
                                                        {item.social.map((item, i) => (
                                                            <li key={i}>
                                                                <i className={item.icon} />
                                                                <span className="title">{item.title} : </span>
                                                                <a rel={'external'} href={item.url}>{item.url}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Fragment>
                ))}
                <Strainslider/>
            </Fragment>
        );
    }
}

export default Content;