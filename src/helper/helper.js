import React from 'react-dom';
import { Link } from 'react-router-dom';

function Rating(rating) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<i className="fas fa-star" key={i}></i>);
    }
    if (rating && rating > 0) {
        for (let i = 0; i <= rating - 1; i++) {
            stars[i] = <i className="fas fa-star active" key={i}></i>;
        }
    }
    return stars;
}
function fetchFlavorIcon(flavor) {
    return process.env.PUBLIC_URL + '/assets/img/' + flavor + '.svg';
}
function postnavigation(items, index) {
    var output = [],
        id, item;
    if (items[index - 1] !== undefined && index - 1 !== -1) {
        item = items[index - 1];
        id = item.id;
        // Show the previous button 
        output.push(<div key={id} className="prev-post">
            <span>Prev Post</span><Link to={"/blog-details/" + parseInt(id)}>{item.title.slice(0,20)} </Link></div>);
    }
    if (items[index + 1] !== undefined && index <= items.length - 1) {
        // Show next button 
        item = items[index + 1];
        id = item.id;
        output.push(<div key={id} className="next-post">
            <span>Next Post</span><Link to={"/blog-details/" + parseInt(id)}>{item.title.slice(0,20)}</Link></div>);
    }

    return output;
}
export { Rating, fetchFlavorIcon, postnavigation };
