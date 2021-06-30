import React, { Component, Fragment } from 'react';
import Brandbanner from '../../layouts/Brandbanner';
import Featuredproducts from '../../layouts/Featuredproducts';
import Ctabanner from './Ctabanner';
import shopblock from '../../../data/shop.json';
import shopcategory from '../../../data/category.json';
import { Link } from 'react-router-dom';
import Loader from '../../layouts/Loader';
import classNames from 'classnames';
import { Modal } from 'react-bootstrap';
import Quickview from '../../layouts/Quickview';
import { getFilteredPosts } from '../../../helper/Producthelper';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.getPosts(),
            currentPage: 1,
            itemsPerPage: 6,
            loading: false,
            modalshow: false,
            lastActiveBox: -1,
        };
        this.handleClick = this.handleClick.bind(this);
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
    }
    getPosts() {
        var cat = this.props.catId ? this.props.catId : '';
        var filteredItems = getFilteredPosts(shopblock, cat = { cat });
        return filteredItems;
    }
    // Modal
    modalShow(index) {
        this.setState({ modalshow: true, lastActiveBox: index });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }

    handleClick(event) {
        var paginationContent = event.target.closest('.pagination-content');

        if (paginationContent) {
            paginationContent.scrollIntoView();
        }

        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                currentPage: Number(event.target.getAttribute('data-page')),
                loading: false
            });
        }, 2000);

    }
    render() {
        const { items, currentPage, itemsPerPage } = this.state;

        // Logic for displaying items
        const indexOfLastitem = currentPage * itemsPerPage;
        const indexOfFirstitem = indexOfLastitem - itemsPerPage;
        const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);

        const renderitems = currentitems.map((item, i) => {
            return <div key={i} className="col-lg-4 col-md-6">
                <div className="product-grid mb-4">
                    {item.category.slice(0, 1).map((category) => (
                        shopcategory.filter(item => {
                            return item.id === category
                        }).map((category, i) => (
                            <div key={i} className={"product-item-top " + category.title}>
                                <div className="product-type">- {category.title} -</div>
                                <div className="strain-type" />
                            </div>
                        ))
                    ))}
                    <div className="product-image4">
                        <Link to={"/shop-details/" + item.id}>
                            <img className="pic-1" src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                        </Link>
                        <ul className="social">
                            <li><Link to="#" data-tip="Quick View" onClick={(e) => this.modalShow(item.id)}><i className="fa fa-eye" /></Link></li>
                            <li><Link to="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></Link></li>
                            <li><Link to="#" data-tip="Add to Favourite"><i className="fas fa-heart" /></Link></li>
                        </ul>
                    </div>
                    <div className="product-content">
                        <h4 className="title"><Link to={"/shop-details/" + item.id}>{item.shorttitle}</Link></h4>
                        <p>{item.title}</p>
                        <div className="price">
                            {
                                item.discount > 0 || item.discount !== '' ? <span>${new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}</span> : ''
                            }
                            <span>${new Intl.NumberFormat().format((item.price).toFixed(2))}</span>
                        </div>
                        <Link className="add-to-cart" to={"/shop-details/" + item.id}>ADD TO CART</Link>
                    </div>
                </div>
            </div>
        });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPagination = pageNumbers.map(number => {
            const activeCondition = this.state.currentPage === number ? 'active' : ''
            return (
                <Fragment key={number}>
                    {pageNumbers.length > 1 ? <li className={classNames({ "active": activeCondition })}>
                        <Link to="#" data-page={number} onClick={this.handleClick}>{number}</Link>
                    </li> : ''}
                </Fragment>
            );
        });
        return (
            <Fragment>
                <section className="cw-shop-section pt-120 pb-120 pagination-content">
                    <div className="container">
                        <div className="cw-section-heading-wrapper">
                            <div className="cw-section-heading">
                                <h4>Explore<span className="cw-primary-color">New</span>Strain</h4>
                            </div>
                        </div>
                        <div className="cw-shop-top-filter">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <form>
                                        <div className="cw-sort-select_filter">
                                            <select>
                                                <option value={1}>Sort By</option>
                                                <option value={2}>Price</option>
                                                <option value={3}>Latest</option>
                                                <option value={4}>Rating</option>
                                                <option value={5}>MF Date</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="cw-shop-view">
                                        <p>Showing all {renderitems.length} results</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Post Start */}
                            {this.state.loading === false ? renderitems : <Loader />}
                            {/* Post End */}
                        </div>
                        <div className="pagination-wrap pt-5">
                            {pageNumbers.length > 1 ?
                                <ul>
                                    {/* Prev */}
                                    {/* to show previous, we need to be on the 2nd or more page */}
                                    {pageNumbers.length > 1 && this.state.currentPage !== 1 ?
                                        <li>
                                            <Link to="#" data-page={this.state.currentPage - 1} onClick={this.handleClick}>
                                                <i className="far fa-angle-double-left" />
                                            </Link>
                                        </li>
                                        : ''}
                                    {/* Prev */}
                                    {renderPagination}
                                    {/* Next */}
                                    {/* to show next, we should not be on the last page */}
                                    {pageNumbers.length > 1 && this.state.currentPage !== pageNumbers.length ? <li>
                                        <Link to="#" data-page={parseInt(this.state.currentPage + 1)} onClick={this.handleClick}>
                                            <i className="far fa-angle-double-right" />
                                        </Link>
                                    </li>
                                        : ''}
                                    {/* Next */}
                                </ul> : ''}
                            {/* Pagination End */}
                        </div>
                    </div>
                    <Modal show={this.state.modalshow} className="w-quick-view" id="quickViewSnap" onHide={this.modalClose} aria-labelledby="contained-modal-title-vcenter" centered >
                        <Modal.Header closeButton></Modal.Header>
                        <Quickview productId={this.state.lastActiveBox} />
                    </Modal>
                </section>
                <Ctabanner />
                <section className="cw-section cw-shop-section pt-120 pb-120">
                    <Featuredproducts />
                </section>
                <section className="cw-section cw-shop-barnd-box pb-120">
                    <Brandbanner />
                </section>
            </Fragment>
        );
    }
}

export default Content;