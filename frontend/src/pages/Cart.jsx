import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { imageConstant } from '../global/imageConstant';

function Cart() {
    return (
        <div>
            <Navbar />
            <div className="modal fade" id="product-view">
                <div className="modal-dialog">
                    <div className="modal-content"><button className="modal-close icofont-close" data-bs-dismiss="modal" ><i class="fa-solid fa-xmark"></i></button>
                        <div className="product-view">
                            <div className="row">
                                <div className="col-md-6 col-lg-6">
                                    <div className="view-gallery">
                                        <ul className="preview-slider slider-arrow">
                                            <li><img src={require("../images/product/01.jpg")} alt="01.jpg" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="view-details">
                                        <h3 className="view-name">existing product name</h3>
                                        <div className="view-meta">
                                            <p>SKU:<span>1234567</span></p>
                                            <p>BRAND:<a href="#">radhuni</a></p>
                                        </div>
                                        <div className="view-rating">
                                            <i className="active fa-solid fa-star" />
                                            <i className="active fa-solid fa-star" />
                                            <i className="active fa-solid fa-star" />
                                            <i className="active fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <a href="product-video.html">(3 reviews)</a>
                                        </div>
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
                                                <li><a href="#" className="fa-brands fa-facebook-f" title="Facebook" /></li>
                                                <li><a href="#" className="fa-brands fa-twitter" title="Twitter" /></li>
                                                <li><a href="#" className="fa-brands fa-linkedin" title="Linkedin" /></li>
                                                <li><a href="#" className="fa-brands fa-instagram" title="Instagram" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="inner-section single-banner" style={{ background: `url(${imageConstant.SINGLE_BANNER})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="container">
                    <h2>cart</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">/ cart</li>
                    </ol>
                </div>
            </section>
            <section className="inner-section checkout-part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="account-card">
                                <div className="account-title">
                                    <h4>Your products</h4>
                                </div>
                                <div className="account-content">
                                    <div className="table-scroll">
                                        <table className="table-list">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Serial</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">brand</th>
                                                    <th scope="col">quantity</th>
                                                    <th scope="col">action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="table-serial">
                                                        <h6>01</h6>
                                                    </td>
                                                    <td className="table-image"><img src="images/product/01.jpg" alt="product" /></td>
                                                    <td className="table-name">
                                                        <h6>product name</h6>
                                                    </td>
                                                    <td className="table-price">
                                                        <h6>$19<small>/kilo</small></h6>
                                                    </td>
                                                    <td className="table-brand">
                                                        <h6>Fresh Company</h6>
                                                    </td>
                                                    <td className="table-quantity">
                                                        <h6>3</h6>
                                                    </td>
                                                    <td className="table-action">
                                                        <a className="view" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-view"><i className="fas fa-eye" /></a>
                                                        <a className="trash cursor-pointer" title="Remove cart"><i className="fa-solid fa-trash" /></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Cart