import React from 'react'
import { imageConstant } from '../global/imageConstant'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function BrandList() {
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
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                        </ul>
                                        <ul className="thumb-slider">
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
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
                                        <div className="view-add-group"><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add to cart</span></button>
                                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button></div>
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
            <section className="single-banner" style={{ background: `url(${imageConstant.SINGLE_BANNER})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="container">
                    <h2>Brand</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">/ brand</li>
                    </ol>
                </div>
            </section>
            <div className="brand-single">
                <a href="#"><img className='ms-auto me-auto mt-12' src="images/brand/02.jpg" alt="brand" /></a>
                <a href="#"><h3>vegan lovers</h3></a>
                <ul>
                    <li className="fas fa-star active" />
                    <li className="fas fa-star active" />
                    <li className="fas fa-star active" />
                    <li className="fas fa-star active" />
                    <li className="fas fa-star" />
                    <li className="total">(163 ratings)</li>
                </ul>
                <p>(45 items)</p>
            </div>
            <section className="inner-section shop-part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-filter">
                                <div className="filter-show"><label className="filter-label">Show :</label><select className="form-select filter-select">
                                    <option value={1}>12</option>
                                    <option value={2}>24</option>
                                    <option value={3}>36</option>
                                </select></div>
                                <div className="filter-short"><label className="filter-label">Short by :</label><select className="form-select filter-select">
                                    <option selected>default</option>
                                    <option value={3}>trending</option>
                                    <option value={1}>featured</option>
                                    <option value={2}>recommend</option>
                                </select></div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5">
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <button className="product-wish wish"><i className="fa-solid fa-heart" /></button>
                                    <a className="product-image" href="product-video.html"><img src="images/product/01.jpg" alt="product" /></a>
                                    <div className="product-widget">
                                        <a title="Product Compare" href="compare.html" className="fas fa-random" />
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" />
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active fa-solid fa-star" />
                                        <i className="active fa-solid fa-star" />
                                        <i className="active fa-solid fa-star" />
                                        <i className="active fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                    </div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><span>$28<small>/piece</small></span></h6>
                                    <button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bottom-paginate">
                                <p className="page-info">Showing 12 of 60 Results</p>
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#"><i className="fas fa-long-arrow-alt-left" /></a></li>
                                    <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">...</li>
                                    <li className="page-item"><a className="page-link" href="#">60</a></li>
                                    <li className="page-item"><a className="page-link" href="#"><i className="fas fa-long-arrow-alt-right" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default BrandList