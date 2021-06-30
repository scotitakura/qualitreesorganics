import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogtags from '../../data/blogtags.json'
import shop from '../../data/shop.json'
import shopcategory from '../../data/category.json'
import IonRangeSlider from 'react-ion-slider';

function setCategoriesCount() {
  for (let i = 0; i < shopcategory.length; i++) {
    var count = shop.filter(post => { return post.category.includes(parseInt(shopcategory[i].id)) });
    count = count.length;
    shopcategory[i].count = count;
  }
}
setCategoriesCount();

class Shopsidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        {/* Search Widget */}
        <div className="widget search-widget mb-40">
          <h5 className="widget-title">Search</h5>
          <form>
            <input type="text" placeholder="Search your keyword..." />
            <button type="submit"><i className="far fa-search" /></button>
          </form>
        </div>
        {/* Categories Widget */}
        <div className="widget categories-widget mb-40">
          <h5 className="widget-title">Product Types</h5>
          <ul>
            {shopcategory.map((item, i) => (
              <li key={i}>
                <Link to={"/shop/cat/" + item.id}>{item.title}<span>{item.count}</span></Link>
              </li>
            ))}
          </ul>
          <div className="view-more-sec text-center">
            <Link to="#" className="main-btn btn-filled mt-4">View more +</Link>
          </div>
        </div>
        {/* Popular Post Widget */}
        <div className="widget popular-feeds popular_widget mb-40">
          <h5 className="widget-title">Filter</h5>
          <div className="cw-fliter-slider">
            <h6>THC Level</h6>
            <p>Choose THC level below.</p>
            <div className="widget_range">
              <div className="thc-range-inner">
                <IonRangeSlider skin={'round'} type={'double'} hide_min_max={true} min={0} max={100} from={0} to={100} grid={false} postfix={'%'} />
              </div>
            </div>
          </div>
          <div className="cw-fliter-slider filter-slider-2">
            <h6>Price</h6>
            <p>Choose price below.</p>
            <div className="widget_range">
              <div className="thc-range-inner">
                <IonRangeSlider skin={'round'} type={'double'} hide_min_max={true} min={0} max={100} from={0} to={100} grid={false} postfix={'%'} />
              </div>
            </div>
          </div>
        </div>
        {/* Popular Tags Widget */}
        <div className="widget popular-tag-widget mb-40">
          <h5 className="widget-title">Popular Tags</h5>
          <ul>
            {blogtags.map((item, i) => (
              <li key={i}>
                <Link to={"/blog/tag/" + item.id}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Shopsidebar;