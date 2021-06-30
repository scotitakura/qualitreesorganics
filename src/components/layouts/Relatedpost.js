import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogpost from '../../data/blog.json';

class Relatedpost extends Component {
    render() {
        return (
            <div className="related-post mt-50">
                <h3 className="mb-30">Releted Post</h3>
                <div className="row">
                    {blogpost.slice(0, 2).map((item, i) => (
                        <div key={i} className="col-md-6">
                            <div className="related-post-box mb-50">
                                <div className="thumb" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.image[0] + ")" }}>
                                </div>
                                <div className="desc">
                                    <Link to={"/blog-details/" + item.id} className="date"><i className="far fa-calendar-alt" />{item.postdate}</Link>
                                    <h4><Link to={"/blog-details/" + item.id}>{item.title.slice(0, 37)}</Link></h4>
                                    <p>{item.shortdescription.slice(0, 100)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Relatedpost;