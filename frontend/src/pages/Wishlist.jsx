import React, { useState } from 'react'
import { imageConstant } from '../global/imageConstant';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Wishlist() {
    const [cartAction, setCartAction] = useState(false)
    const addToCart = () => {
        setCartAction(true)
    }
    return (
        <div>
            <Navbar />
            <div className="modal fade" id="product-view">
                <div className="modal-dialog">
                    <div className="modal-content"><button className="modal-close icofont-close" data-bs-dismiss="modal" />
                        <div className="product-view">
                            <div className="row">
                                <div className="col-md-6 col-lg-6">
                                    <div className="view-gallery">
                                        <div className="view-label-group"><label className="view-label new">new</label><label className="view-label off">-10%</label></div>
                                        <ul className="preview-slider slider-arrow">
                                            <li><img src={require("../images/product/01.jpg")} alt="01.jpg" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="view-details">
                                        <h3 className="view-name"><a href="product-video.html">existing product name</a></h3>
                                        <div className="view-meta">
                                            <p>SKU:<span>1234567</span></p>
                                            <p>BRAND:<a href="#">radhuni</a></p>
                                        </div>
                                        <div className="view-rating"><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><a href="product-video.html">(3 reviews)</a></div>
                                        <h3 className="view-price"><del>$38.00</del><span>$24.00<small>/per kilo</small></span></h3>
                                        <p className="view-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora
                                            magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos
                                            reprehenderit fuga</p>
                                        <div className="view-list-group"><label className="view-list-title">tags:</label>
                                            <ul className="view-tag-list">
                                                <li><a href="#">organic</a></li>
                                                <li><a href="#">vegetable</a></li>
                                                <li><a href="#">chilis</a></li>
                                            </ul>
                                        </div>
                                        <div className="view-list-group"><label className="view-list-title">Share:</label>
                                            <ul className="view-share-list">
                                                <li><a href="#" className="icofont-facebook" title="Facebook" /></li>
                                                <li><a href="#" className="icofont-twitter" title="Twitter" /></li>
                                                <li><a href="#" className="icofont-linkedin" title="Linkedin" /></li>
                                                <li><a href="#" className="icofont-instagram" title="Instagram" /></li>
                                            </ul>
                                        </div>
                                        <div className="view-add-group">
                                            <button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add to cart</span></button>
                                            <div className="product-action">
                                                <button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button>
                                                <input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} />
                                                <button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                            </div>
                                        </div>
                                        <div className="view-action-group"><a className="view-wish wish" href="#" title="Add Your Wishlist"><i className="icofont-heart" /><span>add to
                                            wish</span></a><a className="view-compare" href="compare.html" title="Compare This Item"><i className="fas fa-random" /><span>Compare
                                                This</span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="inner-section single-banner" style={{ background: `url(${imageConstant.SINGLE_BANNER})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="container">
                    <h2>wishlist</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">wishlist</li>
                    </ol>
                </div>
            </section>
            <section className="inner-section wishlist-part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-scroll">
                                <table className="table-list">
                                    <thead>
                                        <tr>
                                            <th scope="col">Serial</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">description</th>
                                            <th scope="col">status</th>
                                            <th scope="col">shopping</th>
                                            <th scope="col">action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="table-serial">
                                                <h6>01</h6>
                                            </td>
                                            <td className="table-image"><img src={require("../images/product/01.jpg")} alt="01.jpg" /></td>
                                            <td className="table-name">
                                                <h6>product name</h6>
                                            </td>
                                            <td className="table-price">
                                                <h6>$19<small>/kilo</small></h6>
                                            </td>
                                            <td className="table-desc">
                                                <p>Lorem ipsum nobis eaque excepturi nisi eveniet...<a href="product-video.html">read more</a></p>
                                            </td>
                                            <td className="table-status">
                                                <h6 className="stock-out">stock out</h6>
                                            </td>
                                            <td className="table-shop">
                                                <button className="product-add" title="Add to Cart" onClick={addToCart} style={{ display: `${cartAction ? 'none' : 'block'}` }}>add to cart</button>
                                                <div className="product-action" style={{ display: `${cartAction ? 'flex' : 'none'}` }}>
                                                    <button className="action-minus" title="Quantity Minus"><i className="fa-solid fa-minus" /></button>
                                                    <input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} />
                                                    <button className="action-plus" title="Quantity Plus"><i className="fa-solid fa-plus" /></button>
                                                </div>
                                            </td>
                                            <td className="table-action">
                                                <a className="view" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-view"><i className="fas fa-eye" /></a>
                                                <a className="trash" href="#" title="Remove Wishlist"><i className="fa-solid fa-trash" /></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-serial">
                                                <h6>02</h6>
                                            </td>
                                            <td className="table-image"><img src={require("../images/product/02.jpg")} alt="02.jpg" /></td>
                                            <td className="table-name">
                                                <h6>product name</h6>
                                            </td>
                                            <td className="table-price">
                                                <h6>$78<small>/kilo</small></h6>
                                            </td>
                                            <td className="table-desc">
                                                <p>Lorem ipsum nobis eaque excepturi nisi eveniet...<a
                                                    href="product-video.html">read more</a></p>
                                            </td>
                                            <td className="table-status">
                                                <h6 className="stock-in">stock in</h6>
                                            </td>
                                            <td className="table-shop"><button className="product-add" title="Add to Cart" onClick={addToCart} style={{ display: `${cartAction ? 'none' : 'block'}` }}>add to cart</button>
                                                <div className="product-action" style={{ display: `${cartAction ? 'flex' : 'none'}` }}>
                                                    <button className="action-minus" title="Quantity Minus"><i className="fa-solid fa-minus"></i></button>
                                                    <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1" />
                                                    <button className="action-plus" title="Quantity Plus"><i className="fa-solid fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td className="table-action">
                                                <a className="view" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-view"><i className="fas fa-eye" /></a>
                                                <a className="trash" href="#" title="Remove Wishlist"><i className="fa-solid fa-trash" /></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center mt-5"><button className="btn btn-outline">Load more items </button></div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </div >
    )
}

export default Wishlist