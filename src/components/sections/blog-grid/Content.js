import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../layouts/Loader';
import classNames from 'classnames';
import blogpost from '../../../data/blog.json';
import blogcategory from '../../../data/blogcategory.json';
import Sidebar from '../../layouts/Blogsidebar';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: blogpost,
            currentPage: 1,
            itemsPerPage: 18,
            loading: false
        };
        this.handleClick = this.handleClick.bind(this);
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
            return <div key={i} className="col-md-6">
                <div className="post-grid-box mb-30">
                    <ul className="post-cat">
                        {item.categories.slice(0, 1).map((category) => (
                            blogcategory.filter(item => {
                                return item.id === category
                            }).map((category, i) => (
                                <li key={i}><Link to={"/blog/cat/" + category.id}>{category.title}</Link></li>
                            ))
                        ))}
                    </ul>
                    <div className="post-desc">
                        <h4><Link to={"/blog-details/" + item.id}>{item.title.slice(0, 37)}</Link>
                        </h4>
                        <p>{item.shortdescription.slice(0, 100)}</p>
                    </div>
                    <ul className="post-meta">
                        <li><Link to="#"><i className="fal fa-calendar-alt" />{item.postdate}</Link></li>
                        {
                            item.reviews > 0 || item.reviews !== '' ? <li><Link to="#"><i className="fal fa-comments" />{item.reviews.length} Comments</Link></li> : ''
                        }
                    </ul>
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
            <section className="blog-section pt-120 pb-120 pagination-content">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Blog Loop Start */}
                        <div className="col-lg-8 col-md-8 col-sm-10">
                            <div className="blog-loop">
                                <div className="row justify-content-center">
                                    {/* Post Start */}
                                    {this.state.loading === false ? renderitems : <Loader />}
                                    {/* Post End */}
                                </div>
                            </div>
                            <div className="pagination-wrap">
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
                        {/* Blog Sidebar */}
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;