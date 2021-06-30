import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProduct } from '../../../helper/Strainhelper';
import { fetchFlavorIcon } from '../../../helper/helper';
import blogcategory from '../../../data/blogcategory.json'
import straincategories from '../../../data/straincategory.json'
import blogtags from '../../../data/blogtags.json'
import author from '../../../data/author.json'

class Content extends Component {
    render() {
        const strainId = this.props.strainId;
        const item = getProduct(strainId);
        return (
            <section className="cannafolio-details-wrap pt-150 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="cannafolio-thumb" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.slideimg + ")" }}>
                                <div className="cannafolio-info">
                                    <ul>
                                        <li>
                                            <span className="title">Project Name</span>
                                            <p>{item.title}</p>
                                        </li>
                                        <li>
                                            <span className="title">Client Name</span>
                                            {item.author.map((user) => (
                                                author.filter(item => {
                                                    return item.id === user
                                                }).map((name, i) => (
                                                    <p key={i}>{name.name}</p>
                                                ))
                                            ))}
                                        </li>
                                        <li>
                                            <span className="title">Date</span>
                                            <p>{item.postdate}</p>
                                        </li>
                                        <li>
                                            <span className="title">Tag</span>
                                            <p>{item.tags.slice(0, 3).map((tag) => (
                                                blogtags.filter(item => {
                                                    return item.id === tag
                                                }).map((tags, i) => (
                                                    <Link to={"/blog/cat/" + tags.id} key={i}>{tags.title}, </Link>
                                                ))
                                            ))}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="product-product-features">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="product-product-effects product-margin-30">
                                            <h5>Effects</h5>
                                            {item.effects.map((effect, i) => (
                                                <div key={i} className="product-product-effects-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar active" style={{ width: (effect.value) + '%' }}>
                                                        </div>
                                                    </div>
                                                    <span className="product-product-effect-title">
                                                        {effect.title}({effect.value})
                                                                </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="product-product-flavors product-margin-30">
                                            <h5>Character</h5>
                                            <div className="product-flavors-align">
                                                {item.character.map((character, i) => (
                                                    <div key={i} className="product-flavors-type">
                                                        <img src={fetchFlavorIcon(character.icon)} alt={character.title} />
                                                        <p>{character.title}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="product-product-flavors">
                                            <h5>Flavors</h5>
                                            <div className="product-flavors-align">
                                                {item.flavours.map((flavour, i) => (
                                                    <div key={i} className="product-flavors-type">
                                                        <img src={fetchFlavorIcon(flavour.icon)} alt={flavour.title} />
                                                        <p>{flavour.title}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="cannafolio-details">
                                <div className="section-title left-border mb-40">
                                    {item.category.slice(0, 3).map((category) => (
                                        straincategories.filter(item => {
                                            return item.id === category
                                        }).map((categories, i) => (
                                            <span key={i} className="title-tag">{categories.title}</span>
                                        ))
                                    ))}
                                    <h2>{item.title}</h2>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: item.longdescription }}></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            {/* Page Sidebar */}
                            <div className="sidebar">
                                {/* Service cat */}
                                <div className="widget service-cat-widget mb-40">
                                    <h5 className="widget-title">Category</h5>
                                    <ul>
                                        {blogcategory.map((item, i) => (
                                            <li key={i}><Link to={"/blog/cat/" + item.id}>{item.title}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Brouchers widget */}
                                <div className="widget brouchers-widget mb-40">
                                    <h5 className="widget-title">Brouchers</h5>
                                    <ul>
                                        <li><Link to="#"><i className="fas fa-file-pdf" />DOWNLOAD PDF FILE</Link></li>
                                        <li><Link to="#"><i className="fas fa-file-powerpoint" />OUR ISO CERTIFICATES</Link></li>
                                        <li><Link to="#"><i className="fas fa-file-image" />OUR ISO CERTIFICATES</Link></li>
                                    </ul>
                                </div>
                                {/* Contact Widget */}
                                <div className="widget contact-widget mb-40">
                                    <h5 className="widget-title">Contact Us</h5>
                                    <form>
                                        <div className="input-group">
                                            <span className="icon"><i className="fas fa-user" /></span>
                                            <input type="text" placeholder="Enter Your Name" />
                                        </div>
                                        <div className="input-group">
                                            <span className="icon"><i className="fas fa-envelope" /></span>
                                            <input type="email" placeholder="Enter email" />
                                        </div>
                                        <div className="input-group textarea">
                                            <span className="icon"><i className="fas fa-edit" /></span>
                                            <textarea placeholder="Enter message" />
                                        </div>
                                        <div className="text-center mt-20"><button type="submit" className="main-btn btn-filled">Get A
                  Quote</button></div>
                                    </form>
                                </div>
                                {/* Bannner Widget */}
                                <div className="widget banner-ad-widget">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/banner-widget-2.jpg"} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;