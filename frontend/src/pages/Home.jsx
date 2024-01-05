import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Home() {
    var bannerPartSliderOptions = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    var collectNewItemSliderOptions = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false
    };
    var brandSliderOptions = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false
    }
    var clientFeedBackSliderOptions = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        className: "center",
        centerMode: true,
        centerPadding: "30px",
    }
    var articleSliderOptions = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    }

    return (
        <div className='home'>
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
            <section className="home-index-slider slider-arrow slider-dots">
                <Slider {...bannerPartSliderOptions}>
                    <div className="banner-part banner-1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-lg-6">
                                    <div className="banner-content">
                                        <h1>free home delivery within 24 hours now.</h1>
                                        <p>Lorem ipsum dolor consectetur adipisicing elit modi consequatur eaque expedita porro
                                            necessitatibus eveniet voluptatum quis pariatur Laboriosam molestiae architecto
                                            excepturi</p>
                                        <div className="banner-btn"><a className="btn btn-inline" href="shop-4column.html"><i className="fas fa-shopping-basket" /><span>shop now</span></a><a className="btn btn-outline" href="offer.html"><i className="icofont-sale-discount" /><span>get offer</span></a></div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="banner-img"><img src="images/home/index/01.png" alt="index" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-part banner-2">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-lg-6">
                                    <div className="banner-img"><img src="images/home/index/02.png" alt="index" /></div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="banner-content">
                                        <h1>free home delivery within 24 hours now.</h1>
                                        <p>Lorem ipsum dolor consectetur adipisicing elit modi consequatur eaque expedita porro
                                            necessitatibus eveniet voluptatum quis pariatur Laboriosam molestiae architecto
                                            excepturi</p>
                                        <div className="banner-btn"><a className="btn btn-inline" href="shop-4column.html"><i className="fas fa-shopping-basket" /><span>shop now</span></a><a className="btn btn-outline" href="offer.html"><i className="icofont-sale-discount" /><span>get offer</span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
            <section className="section recent-part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>recently sold items</h2>
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
                            <div className="product-card">
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
                            <div className="section-btn-25"><a href="shop-4column.html" className="btn btn-outline"><i className="fas fa-eye" /><span>show more</span></a></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section promo-part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="promo-img"><a href="#"><img src="images/promo/home/03.jpg" alt="promo" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section countdown-part">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mx-auto">
                            <div className="countdown-content">
                                <h3>special discount offer for vegetable items</h3>
                                <p>Reprehenderit sed quod autem molestiae aut modi minus veritatis iste dolorum suscipit quis
                                    voluptatum fugiat mollitia quia minima</p>
                                <div className="countdown countdown-clock" data-countdown="2022/12/22"><span className="countdown-time"><span>00</span><small>days</small></span><span className="countdown-time"><span>00</span><small>hours</small></span><span className="countdown-time"><span>00</span><small>minutes</small></span><span className="countdown-time"><span>00</span><small>seconds</small></span></div><a href="shop-4column.html" className="btn btn-inline"><i className="fas fa-shopping-basket" /><span>shop now</span></a>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                        <div className="col-lg-5">
                            <div className="countdown-img"><img src="images/countdown.png" alt="countdown" />
                                <div className="countdown-off"><span>20%</span><span>off</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section newitem-part">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section-heading">
                                <h2>collected new items</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul className="new-slider slider-arrow">
                                <Slider {...collectNewItemSliderOptions}>
                                    <li>
                                        <div className="product-card">
                                            <div className="product-media">
                                                <div className="product-label"><label className="label-text new">new</label></div>
                                                <button className="product-wish wish"><i className="fas fa-heart" /></button>
                                                <a className="product-image" href="product-video.html"><img src={require("../images/product/14.jpg")} alt="15.jpg" /></a>
                                                <div className="product-widget">
                                                    <a title="Product Compare" href="compare.html" className="fas fa-random" />
                                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" />
                                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-rating">
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <a href="product-video.html">(3)</a>
                                                </div>
                                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                                                <button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                                <div className="product-action">
                                                    <button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button>
                                                    <input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} />
                                                    <button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="product-card">
                                            <div className="product-media">
                                                <div className="product-label"><label className="label-text new">new</label></div>
                                                <button className="product-wish wish"><i className="fas fa-heart" /></button>
                                                <a className="product-image" href="product-video.html"><img src={require("../images/product/15.jpg")} alt="15.jpg" /></a>
                                                <div className="product-widget">
                                                    <a title="Product Compare" href="compare.html" className="fas fa-random" />
                                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" />
                                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-rating">
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <a href="product-video.html">(3)</a>
                                                </div>
                                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                                                <button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                                <div className="product-action">
                                                    <button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button>
                                                    <input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} />
                                                    <button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="product-card">
                                            <div className="product-media">
                                                <div className="product-label"><label className="label-text new">new</label></div>
                                                <button className="product-wish wish"><i className="fas fa-heart" /></button>
                                                <a className="product-image" href="product-video.html"><img src={require("../images/product/16.jpg")} alt="15.jpg" /></a>
                                                <div className="product-widget">
                                                    <a title="Product Compare" href="compare.html" className="fas fa-random" />
                                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" />
                                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-rating">
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <a href="product-video.html">(3)</a>
                                                </div>
                                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                                                <button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                                <div className="product-action">
                                                    <button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button>
                                                    <input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} />
                                                    <button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="product-card">
                                            <div className="product-media">
                                                <div className="product-label"><label className="label-text new">new</label></div>
                                                <button className="product-wish wish"><i className="fas fa-heart" /></button>
                                                <a className="product-image" href="product-video.html"><img src={require("../images/product/17.jpg")} alt="15.jpg" /></a>
                                                <div className="product-widget">
                                                    <a title="Product Compare" href="compare.html" className="fas fa-random" />
                                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" />
                                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-rating">
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="active fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <a href="product-video.html">(3)</a>
                                                </div>
                                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                                                <button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket" /><span>add</span></button>
                                                <div className="product-action">
                                                    <button className="action-minus" title="Quantity Minus"><i className="icofont-minus" /></button>
                                                    <input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} />
                                                    <button className="action-plus" title="Quantity Plus"><i className="icofont-plus" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </Slider>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="section-btn-25"><a href="shop-4column.html" className="btn btn-outline"><i className="fas fa-eye" /><span>show more</span></a></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section promo-part">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 px-xl-3">
                            <div className="promo-img"><a href="#"><img src="images/promo/home/01.jpg" alt="promo" /></a></div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 px-xl-3">
                            <div className="promo-img"><a href="#"><img src="images/promo/home/02.jpg" alt="promo" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section brand-part">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h2>shop by brands</h2>
                            </div>
                        </div>
                    </div>
                    <div className="brand-slider slider-arrow">
                        <Slider {...brandSliderOptions}>
                            <div className="brand-wrap">
                                <div className="brand-media"><img src="images/brand/01.jpg" alt="brand" />
                                    <div className="brand-overlay"><a href="brand-single.html"><i className="fas fa-link" /></a></div>
                                </div>
                                <div className="brand-meta">
                                    <h4>natural greeny</h4>
                                    <p>(45 items)</p>
                                </div>
                            </div>
                            <div className="brand-wrap">
                                <div className="brand-media"><img src="images/brand/02.jpg" alt="brand" />
                                    <div className="brand-overlay"><a href="brand-single.html"><i className="fas fa-link" /></a></div>
                                </div>
                                <div className="brand-meta">
                                    <h4>vegan lover</h4>
                                    <p>(45 items)</p>
                                </div>
                            </div>
                            <div className="brand-wrap">
                                <div className="brand-media"><img src="images/brand/03.jpg" alt="brand" />
                                    <div className="brand-overlay"><a href="brand-single.html"><i className="fas fa-link" /></a></div>
                                </div>
                                <div className="brand-meta">
                                    <h4>organic foody</h4>
                                    <p>(45 items)</p>
                                </div>
                            </div>
                            <div className="brand-wrap">
                                <div className="brand-media"><img src="images/brand/04.jpg" alt="brand" />
                                    <div className="brand-overlay"><a href="brand-single.html"><i className="fas fa-link" /></a></div>
                                </div>
                                <div className="brand-meta">
                                    <h4>ecomart limited</h4>
                                    <p>(45 items)</p>
                                </div>
                            </div>
                            <div className="brand-wrap">
                                <div className="brand-media"><img src="images/brand/05.jpg" alt="brand" />
                                    <div className="brand-overlay"><a href="brand-single.html"><i className="fas fa-link" /></a></div>
                                </div>
                                <div className="brand-meta">
                                    <h4>fresh fortune</h4>
                                    <p>(45 items)</p>
                                </div>
                            </div>
                            <div className="brand-wrap">
                                <div className="brand-media"><img src="images/brand/06.jpg" alt="brand" />
                                    <div className="brand-overlay"><a href="brand-single.html"><i className="fas fa-link" /></a></div>
                                </div>
                                <div className="brand-meta">
                                    <h4>econature</h4>
                                    <p>(45 items)</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-btn-50"><a href="brand-list.html" className="btn btn-outline"><i className="fas fa-eye" /><span>view all brands</span></a></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section testimonial-part">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h2>client's feedback</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial-slider slider-arrow">
                                <Slider {...clientFeedBackSliderOptions}>
                                    <div className="testimonial-card"><i className="fas fa-quote-left" />
                                        <p>Lorem ipsum dolor consectetur adipisicing elit neque earum sapiente vitae obcaecati
                                            magnam doloribus magni provident ipsam</p>
                                        <h5>mahmud hasan</h5>
                                        <ul>
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                        </ul><img src="images/avatar/01.jpg" alt="testimonial" />
                                    </div>
                                    <div className="testimonial-card"><i className="fas fa-quote-left" />
                                        <p>Lorem ipsum dolor consectetur adipisicing elit neque earum sapiente vitae obcaecati
                                            magnam doloribus magni provident ipsam</p>
                                        <h5>mahmud hasan</h5>
                                        <ul>
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                        </ul><img src="images/avatar/02.jpg" alt="testimonial" />
                                    </div>
                                    <div className="testimonial-card"><i className="fas fa-quote-left" />
                                        <p>Lorem ipsum dolor consectetur adipisicing elit neque earum sapiente vitae obcaecati
                                            magnam doloribus magni provident ipsam</p>
                                        <h5>mahmud hasan</h5>
                                        <ul>
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                        </ul><img src="images/avatar/03.jpg" alt="testimonial" />
                                    </div>
                                    <div className="testimonial-card"><i className="fas fa-quote-left" />
                                        <p>Lorem ipsum dolor consectetur adipisicing elit neque earum sapiente vitae obcaecati
                                            magnam doloribus magni provident ipsam</p>
                                        <h5>mahmud hasan</h5>
                                        <ul>
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                            <li className="fas fa-star" />
                                        </ul><img src="images/avatar/04.jpg" alt="testimonial" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section blog-part">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h2>Read our articles</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-slider slider-arrow">
                                <Slider {...articleSliderOptions}>
                                    <div className="blog-card">
                                        <div className="blog-media"><Link className="blog-img" to={`/blog/1`}><img src={require("../images/blog/01.jpg")} alt="01.jpg" /></Link></div>
                                        <div className="blog-content">
                                            <ul className="blog-meta">
                                                <li><i className="fas fa-user" /><span>admin</span></li>
                                                <li><i className="fas fa-calendar-alt" /><span>february 02, 2021</span></li>
                                            </ul>
                                            <h4 className="blog-title">Voluptate blanditiis provident Lorem ipsum dolor sit amet</h4>
                                            <p className="blog-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... </p>
                                            <Link className="blog-btn" to={`/blog/1`}><span>read more</span><i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                    <div className="blog-card">
                                        <div className="blog-media"><Link className="blog-img" to={`/blog/2`}><img src={require("../images/blog/02.jpg")} alt="02.jpg" /></Link></div>
                                        <div className="blog-content">
                                            <ul className="blog-meta">
                                                <li><i className="fas fa-user" /><span>admin</span></li>
                                                <li><i className="fas fa-calendar-alt" /><span>february 02, 2021</span></li>
                                            </ul>
                                            <h4 className="blog-title">Voluptate blanditiis provident Lorem ipsum dolor sit amet</h4>
                                            <p className="blog-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... </p>
                                            <Link className="blog-btn" to={`/blog/2`}><span>read more</span><i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                    <div className="blog-card">
                                        <div className="blog-media"><Link className="blog-img" to={`/blog/3`}><img src={require("../images/blog/03.jpg")} alt="03.jpg" /></Link></div>
                                        <div className="blog-content">
                                            <ul className="blog-meta">
                                                <li><i className="fas fa-user" /><span>admin</span></li>
                                                <li><i className="fas fa-calendar-alt" /><span>february 02, 2021</span></li>
                                            </ul>
                                            <h4 className="blog-title">Voluptate blanditiis provident Lorem ipsum dolor sit amet</h4>
                                            <p className="blog-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... </p>
                                            <Link className="blog-btn" to={`/blog/3`}><span>read more</span><i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                    <div className="blog-card">
                                        <div className="blog-media"><Link className="blog-img" to={`/blog/4`}><img src={require("../images/blog/04.jpg")} alt="04.jpg" /></Link></div>
                                        <div className="blog-content">
                                            <ul className="blog-meta">
                                                <li><i className="fas fa-user" /><span>admin</span></li>
                                                <li><i className="fas fa-calendar-alt" /><span>february 02, 2021</span></li>
                                            </ul>
                                            <h4 className="blog-title">Voluptate blanditiis provident Lorem ipsum dolor sit amet</h4>
                                            <p className="blog-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... </p>
                                            <Link className="blog-btn" to={`/blog/4`}><span>read more</span><i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-btn-25"><a href="blog-grid.html" className="btn btn-outline"><i className="fas fa-eye" /><span>view all blog</span></a></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home