import React, { Component } from 'react';

class Backtotop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backToTop: false
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.setState({
                isTop: window.scrollY > 300
            });
        }, false);
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        const className = this.state.isTop ? 'active' : '';
        return (
            <div className="go-top-area">
                <div className="go-top-wrap">
                    <div className="go-top-btn-wrap">
                        <div className={`go-top-btn go-top ${className}`} id="backToTop" onClick={() => this.scrollToTop()}>
                            <i className="fal fa-angle-double-up" />
                            <i className="fal fa-angle-double-up" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Backtotop;