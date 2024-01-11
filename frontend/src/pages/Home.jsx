import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import makeApiRequest from '../global/apiCall';
import { apiKeys, apiTypes } from '../global/apiKeys';
import { IMAGEBASEURL_BANNERS, IMAGEBASEURL_BRANDS } from '../global/imageConstant';

function Home() {
    var bannerPartSliderOptions = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    var brandSliderOptions = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear"
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

    const [bannerData, setBannerData] = useState([])
    const [brandData, setBrandData] = useState([])

    // Get banner data for user
    const getAllBbannerData = () => {
        makeApiRequest(apiTypes.GET, apiKeys.getAllBanners, null, null, null)
            .then((resoponse) => {
                // console.log("🚀 ~ .then ~ resoponse:", resoponse)
                setBannerData(resoponse.data.bannerData)
            })
            .catch((error) => {
                console.log("🚀 ~ getAllBrandsData ~ error:", error.response.data.message)
                alert(error.response.data.message)
            })
    }

    // Get all brands for user
    const getAllBrandsData = () => {
        makeApiRequest(apiTypes.GET, apiKeys.getAllBrands, null, null, null)
            .then((resoponse) => {
                // console.log("🚀 ~ .then ~ resoponse:", resoponse)
                setBrandData(resoponse.data.brandsData)
            })
            .catch((error) => {
                console.log("🚀 ~ getAllBrandsData ~ error:", error.response.data.message)
                alert(error.response.data.message)
            })
    }

    useEffect(() => {
        getAllBbannerData()
        getAllBrandsData()
    }, [])
    return (
        <div className='home'>
            <Navbar />
            <section className="home-index-slider slider-arrow slider-dots">
                <Slider {...bannerPartSliderOptions}>
                    {
                        bannerData.map((item, index) => (
                            <div className="banner-part banner-1" key={index}>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-lg-6">
                                            <div className="banner-content">
                                                <h1>{item.bannerTitle}</h1>
                                                <p>{item.bannerDescription}</p>
                                                <div className="banner-btn">
                                                    <a className="btn btn-inline" href="shop-4column.html"><i className="fas fa-shopping-basket" /><span>shop now</span></a>
                                                    <a className="btn btn-outline" href="offer.html"><i className="icofont-sale-discount" /><span>get offer</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="banner-img"><img src={`${IMAGEBASEURL_BANNERS}${item.bannerImage}`} alt={item.bannerImage} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </section>
            <section className="section niche-part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>our items</h2>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade show active" id="top-order">
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                            <div className="col">
                                <div className="product-card">
                                    <div className="product-media">
                                        <button className="product-wish wish"><i className="fas fa-heart" /></button>
                                        <a className="product-image" href="product-video.html"><img src={require("../images/product/01.jpg")} alt="01.jpg" /></a>
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
                            <div className="col">
                                <div className="product-card product-disable">
                                    <div className="product-media">
                                        <button className="product-wish wish"><i className="fas fa-heart" /></button>
                                        <a className="product-image" href="product-video.html"><img src={require("../images/product/07.jpg")} alt="07.jpg" /></a>
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
                            <div className="promo-img"><a href="#"><img src={require("../images/promo/home/03.jpg")} alt="03.jpg" /></a></div>
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
                        {
                            brandData.length > 0 ? (
                                <Slider {...brandSliderOptions}>
                                    {
                                        brandData.map((item, index) => (
                                            <div className="brand-wrap" key={index}>
                                                <div className="brand-media"><img src={`${IMAGEBASEURL_BRANDS}${item.brandImage}`} alt={item.brandImage} />
                                                    <div className="brand-overlay"><a href="brand-single.html"><i className="fas fa-link" /></a></div>
                                                </div>
                                                <div className="brand-meta">
                                                    <h4>{item.brandName}</h4>
                                                    <p>{`(${item.totalItems} items)`}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            ) :
                                (<p className='text-center text-2xl'>No brands data here...!</p>)
                        }
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={`section-btn-50 ${brandData.length == 0 ? "hidden" : ""}`}><a href="brand-list.html" className="btn btn-outline"><i className="fas fa-eye" /><span>view all brands</span></a></div>
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
            <Footer />
        </div>
    )
}

export default Home