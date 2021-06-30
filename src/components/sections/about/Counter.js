import React, { Fragment } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const countPost = [
    {
        count: 299,
        title: "New Client"
    },
    {
        count: 177,
        title: "Active Client"
    },
    {
        count: 5,
        title: "Old Client"
    },
    {
        count: 69,
        title: "Award Winning"
    }
]

export default function Counter() {
    const [focus, setFocus] = React.useState(false);
    return (
        <section className="counter-section mt-negative">
            <div className="container">
                <div className="counter-inner">
                    <div className="row">
                        {countPost.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-3 col-6">
                                <div className="counter-box">
                                    <h1>
                                        <CountUp start={focus ? 0 : null} end={parseInt(item.count)} duration={5} redraw={true}>
                                            {({ countUpRef }) => (
                                                <Fragment>
                                                    <span ref={countUpRef} className="counter" />
                                                    <VisibilitySensor
                                                        onChange={isVisible => {
                                                            if (isVisible) {
                                                                setFocus(true);
                                                            }
                                                        }}
                                                    >
                                                        <span>K+</span>
                                                    </VisibilitySensor>
                                                </Fragment>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <p className="title">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <span className="big-text">
                        Cannaweed
                    </span>
                </div>
            </div>
        </section>
    );
}
