import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartitem from '../../../data/cart.json'

const tax = 9.99;

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceTotal: cartitem.reduce((totalPrice, item) => totalPrice + item.price * item.qty, 0),
            cartitem: cartitem
        };
    }
    IncrementItem = (item) => {
        item.qty = item.qty + 1;
        this.setState({ cartitem: this.state.cartitem, priceTotal: cartitem.reduce((totalPrice, item) => totalPrice + item.price * item.qty, 0) });
    };
    DecreaseItem = (item) => {
        item.qty = item.qty - 1;
        this.setState({ cartitem: this.state.cartitem, priceTotal: cartitem.reduce((totalPrice, item) => totalPrice + item.price * item.qty, 0) });
    };
    render() {
        return (
            <section className="cart-section pt-120 pb-120">
                <div className="container">
                    <div className="product-section-heading-wrapper">
                        <div className="product-section-heading section-title both-border">
                            <span className="title-tag">Shopping</span>
                            <h3 className="wow fadeIn">Cart</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100 table-responsive mb-4">
                                <table className="table cw-cart-table">
                                    <thead>
                                        <tr>
                                            <th />
                                            <th scope="col" className="product-name">Product</th>
                                            <th scope="col" className="product-qty">Quantity</th>
                                            <th scope="col" className="product-price">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartitem.map((item, i) => (
                                            <tr key={i}>
                                                <td className="product-remove cw-align">
                                                    <Link to="#"><i className="fas fa-times" /></Link>
                                                </td>
                                                <td data-title="Product" className="has-title">
                                                    <div className="product-thumbnail">
                                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.title} />
                                                    </div>
                                                    <Link to="/shop-details/1" className="btn-link">{item.title}</Link>
                                                </td>
                                                <td className="quantity cw-qty-sec cw-align has-title" data-title="Quantity">
                                                    <div className="input-group">
                                                        <span className="input-group-btn">
                                                            <button type="button" className="quantity-left-minus1 btn btn-number" onClick={() => this.DecreaseItem(item)}>
                                                                <i className="fa fa-minus" />
                                                            </button>
                                                        </span>
                                                        <input type="text" id="quantity1" name="quantity" className="form-control input-number" value={item.qty} readOnly />
                                                        <span className="input-group-btn">
                                                            <button type="button" className="quantity-right-plus1 btn btn-number" onClick={() => this.IncrementItem(item)}>
                                                                <i className="fa fa-plus" />
                                                            </button>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="product-price cw-align has-title" data-title="Price">
                                                    <span className="product-currency">$</span> <span className="product-amount">{new Intl.NumberFormat().format((item.price * item.qty).toFixed(2))}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={4}>
                                                <button className="main-btn btn-filled float-left">Continue Shoping</button>
                                                <button className="main-btn btn-filled float-right">Update Cart</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mb-5">
                                    <div className="cw-product-promo">
                                        <div className="cw-title">
                                            <h5>Discount Code</h5>
                                        </div>
                                        <form>
                                            <div className="form-group mb-0">
                                                <label htmlFor="couponCode">Enter coupon code</label>
                                                <input type="text" className="form-control" placeholder="Coupon Code" id="couponCode" />
                                                <button type="submit" className="main-btn btn-filled mt-4">Apply</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="offset-lg-6 col-lg-6 col-md-12">
                                    <div className="cw-product-promo">
                                        <table className="table cw-table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td> <b>Subtotal</b> </td>
                                                    <td className="text-right">$ {new Intl.NumberFormat().format((this.state.priceTotal).toFixed(2))}</td>
                                                </tr>
                                                <tr>
                                                    <td> <b>Shipping</b> </td>
                                                    <td className="text-right">$ {tax}</td>
                                                </tr>
                                                <tr>
                                                    <td> <b>Total</b> </td>
                                                    <td className="text-right">$ {new Intl.NumberFormat().format((this.state.priceTotal + tax).toFixed(2))}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button type="submit" className="main-btn btn-filled w-100">Proceed to Checkout</button>
                                    </div>
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