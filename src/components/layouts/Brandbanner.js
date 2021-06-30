import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const brandbanner = [
    {
        id: 1,
        title: "New Products",
        price: 250.00
    },
    {
        id: 2,
        title: "Most Selling",
        price: 250.00
    },
    {
        id: 3,
        title: "New Accessories",
        price: 250.00
    },
    {
        id: 4,
        title: "High Rated",
        price: 250.00
    }
]

class Brandbanner extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {brandbanner.map((item, i) => (
                        <div key={i} className="col-lg-6 col-sm-12">
                            <div className={"cw-featured-box-bg-0" + item.id}>
                                <div className="cw-featured-box-inner">
                                    <Link to="#">
                                        <h5 className="title">{item.title}</h5>
                                        <p>From <span>${new Intl.NumberFormat().format((item.price).toFixed(2))}</span></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Brandbanner;