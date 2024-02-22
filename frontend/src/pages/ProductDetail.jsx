import "../styles/main.css"
import "../styles/product-details.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import makeApiRequest from "../global/apiCall"
import { apiKeys, apiTypes } from "../global/apiKeys"
import { imageConstant } from "../global/imageConstant"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const { productId } = useParams()
    const [getProduct, setGetProduct] = useState([])

    // Get single product for user
    const getSingleProductData = () => {
        makeApiRequest(apiTypes.GET, `${apiKeys.getAllSingleProductData}/${productId}`, null, null, null)
            .then((resoponse) => {
                setGetProduct(resoponse.data.productData[0])
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    useEffect(() => {
        getSingleProductData()
    }, [])

    return (
        <div>
            <Navbar />
            {/* <div className="modal fade" id="product-view">
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
            </div> */}
            <section className="single-banner inner-section" style={{ background: `url(${imageConstant.SINGLE_BANNER})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="container">
                    <h2>product details</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Product</li>
                    </ol>
                </div>
            </section>
            <section className="inner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="details-gallery">
                                <ul className="details-preview">
                                    <li><img src={getProduct.productImage} alt={getProduct.productImage} /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="details-content">
                                <h3 className="details-name"><a href="#">{getProduct.productName}</a></h3>
                                <div className="details-meta">
                                    <p>SKU:<span>{getProduct._id}</span></p>
                                    <p>BRAND: {getProduct?.brandDetail?.brandName}</p>
                                </div>
                                <div className="details-rating">
                                    <i className="active fa-solid fa-star" />
                                    <i className="active fa-solid fa-star" />
                                    <i className="active fa-solid fa-star" />
                                    <i className="active fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />(3 reviews)
                                </div>
                                <h3 className="details-price"><span>₹{getProduct.productPrice}<small>/{getProduct.productMeasurement}</small></span></h3>
                                <p className="details-desc">{getProduct.productDescription}</p>
                                <div className="details-list-group"><label className="details-list-title">tags:</label>
                                    <ul className="details-tag-list">
                                        {
                                            getProduct?.productTags?.map((tag) => (
                                                <li><a href="#">{tag}</a></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="details-list-group"><label className="details-list-title">Share:</label>
                                    <ul className="details-share-list">
                                        <li><a href="#" className="fa-brands fa-facebook" title="Facebook" /></li>
                                        <li><a href="#" className="fa-brands fa-twitter" title="Twitter" /></li>
                                        <li><a href="#" className="fa-brands fa-linkedin" title="Linkedin" /></li>
                                        <li><a href="#" className="fa-brands fa-instagram" title="Instagram" /></li>
                                    </ul>
                                </div>
                                <div className="details-add-group">
                                    <button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add to cart</span></button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="fa-solid fa-minus" /></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} />
                                        <button className="action-plus" title="Quantity Plus"><i className="fa-solid fa-plus" /></button>
                                    </div>
                                </div>
                                <div className="details-action-group">
                                    <a className="details-wish wish" href="#" title="Add Your Wishlist"><i className="fa-solid fa-heart" /><span>add to wish</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="inner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-tabs">
                                <li><a href="#tab-desc" className="tab-link active" data-bs-toggle="tab">descriptions</a></li>
                                <li><a href="#tab-spec" className="tab-link" data-bs-toggle="tab">Specifications</a></li>
                                <li><a href="#tab-reve" className="tab-link" data-bs-toggle="tab">reviews (2)</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-pane fade show active" id="tab-desc">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product-details-frame">
                                    <div className="tab-descrip">
                                        <p>{getProduct.productDescription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab-spec">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product-details-frame">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Product code</th>
                                                <td>SKU: {getProduct._id}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Weight</th>
                                                <td>{getProduct.productWeight}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Styles</th>
                                                <td>{getProduct.productStyle}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Properties</th>
                                                <td>{getProduct.productProperties}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab-reve">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product-details-frame">
                                    <ul className="review-list">
                                        <li className="review-item">
                                            <div className="review-media"><a className="review-avatar" href="#"><img src={require("../images/avatar/01.jpg")} alt="review" /></a>
                                                <h5 className="review-meta"><a href="#">miron mahmud</a><span>June 02, 2020</span>
                                                </h5>
                                            </div>
                                            <p className="review-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Ducimus hic amet qui velit, molestiae suscipit perferendis, autem doloremque
                                                blanditiis dolores nulla excepturi ea nobis!</p>
                                            <form className="review-reply">
                                                <input type="text" placeholder="reply your thoughts" />
                                                <button>reply</button>
                                            </form>
                                            <ul className="review-reply-list">
                                                <li className="review-reply-item">
                                                    <div className="review-media"><a className="review-avatar" href="#"><img src={require("../images/avatar/02.jpg")} alt="review" /></a>
                                                        <h5 className="review-meta"><a href="#">labonno khan</a><span>June 02, 2020</span></h5>
                                                    </div>
                                                    <p className="review-desc">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit. Ducimus hic amet qui velit, molestiae suscipit perferendis, autem
                                                        doloremque blanditiis dolores nulla excepturi ea nobis!</p>
                                                    <form className="review-reply"><input type="text" placeholder="reply your thoughts" /><button>reply</button></form>
                                                </li>
                                                <li className="review-reply-item">
                                                    <div className="review-media"><a className="review-avatar" href="#"><img src={require("../images/avatar/03.jpg")} alt="review" /></a>
                                                        <h5 className="review-meta"><a href="#">tahmina bonny</a><span>June 02,
                                                            2020</span></h5>
                                                    </div>
                                                    <p className="review-desc">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit. Ducimus hic amet qui velit, molestiae suscipit perferendis, autem
                                                        doloremque blanditiis dolores nulla excepturi ea nobis!</p>
                                                    <form className="review-reply"><input type="text" placeholder="reply your thoughts" /><button>reply</button></form>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="review-item">
                                            <div className="review-media"><a className="review-avatar" href="#"><img src={require("../images/avatar/04.jpg")} alt="review" /></a>
                                                <h5 className="review-meta"><a href="#">shipu shikdar</a><span>June 02, 2020</span>
                                                </h5>
                                            </div>
                                            <p className="review-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Ducimus hic amet qui velit, molestiae suscipit perferendis, autem doloremque
                                                blanditiis dolores nulla excepturi ea nobis!</p>
                                            <form className="review-reply"><input type="text" placeholder="reply your thoughts" /><button>reply</button></form>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-details-frame">
                                    <h3 className="frame-title">add your review</h3>
                                    <form className="review-form">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="star-rating">
                                                    <input type="radio" name="rating" id="star-1" />
                                                    <label htmlFor="star-1" /><input type="radio" name="rating" id="star-2" />
                                                    <label htmlFor="star-2" /><input type="radio" name="rating" id="star-3" />
                                                    <label htmlFor="star-3" /><input type="radio" name="rating" id="star-4" />
                                                    <label htmlFor="star-4" /><input type="radio" name="rating" id="star-5" />
                                                    <label htmlFor="star-5" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group"><textarea className="form-control" placeholder="Describe" defaultValue={""} /></div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group"><input type="text" className="form-control" placeholder="Name" /></div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group"><input type="email" className="form-control" placeholder="Email" /></div>
                                            </div>
                                            <div className="col-lg-12"><button className="btn btn-inline"><i className="fa-solid fa-water-drop" /><span>drop your review</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="inner-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section-heading">
                                <h2>related this items</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart" /></button><a className="product-image" href="product-video.html"><img src="images/product/01.jpg" alt="product" /></a>
                                    <div className="product-widget"><a title="Product Compare" href="compare.html" className="fas fa-random" /><a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" /></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text sale">sale</label><label className="label-text new">new</label></div><button className="product-wish wish"><i className="fas fa-heart" /></button><a className="product-image" href="product-video.html"><img src="images/product/02.jpg" alt="product" /></a>
                                    <div className="product-widget"><a title="Product Compare" href="compare.html" className="fas fa-random" /><a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" /></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart" /></button><a className="product-image" href="product-video.html"><img src="images/product/03.jpg" alt="product" /></a>
                                    <div className="product-widget"><a title="Product Compare" href="compare.html" className="fas fa-random" /><a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" /></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart" /></button><a className="product-image" href="product-video.html"><img src="images/product/04.jpg" alt="product" /></a>
                                    <div className="product-widget"><a title="Product Compare" href="compare.html" className="fas fa-random" /><a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" /></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart" /></button><a className="product-image" href="product-video.html"><img src="images/product/05.jpg" alt="product" /></a>
                                    <div className="product-widget"><a title="Product Compare" href="compare.html" className="fas fa-random" /><a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" /></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart" /></button><a className="product-image" href="product-video.html"><img src="images/product/06.jpg" alt="product" /></a>
                                    <div className="product-widget"><a title="Product Compare" href="compare.html" className="fas fa-random" /><a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" /></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart" /></button><a className="product-image" href="product-video.html"><img src="images/product/07.jpg" alt="product" /></a>
                                    <div className="product-widget"><a title="Product Compare" href="compare.html" className="fas fa-random" /><a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" /></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart" /></button><a className="product-image" href="product-video.html"><img src="images/product/08.jpg" alt="product" /></a>
                                    <div className="product-widget"><a title="Product Compare" href="compare.html" className="fas fa-random" /><a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" /></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card product-disable">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart" /></button><a className="product-image" href="product-video.html"><img src="images/product/09.jpg" alt="product" /></a>
                                    <div className="product-widget"><a title="Product Compare" href="compare.html" className="fas fa-random" /><a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" /></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart" /></button><a className="product-image" href="product-video.html"><img src="images/product/10.jpg" alt="product" /></a>
                                    <div className="product-widget"><a title="Product Compare" href="compare.html" className="fas fa-random" /><a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" /></div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-btn-25"><a href="shop-4column.html" className="btn btn-outline"><i className="fas fa-eye" /><span>view all related</span></a></div>
                        </div>
                    </div>
                </div>
            </section> */}
            <Footer />
        </div>
    )
}

export default ProductDetail