import React from 'react'
import imageConstant from '../global/imageConstant'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Contact() {
    return (
        <div>
            <Navbar />
            <section className="inner-section single-banner" style={{ background: `url(${imageConstant.SINGLE_BANNER})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="container">
                    <h2>contact us</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">/ Contact</li>
                    </ol>
                </div>
            </section>
            <section className="inner-section contact-part">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="contact-card"><i class="fa-solid fa-location-dot"></i>
                                <h4>head office</h4>
                                <p>1Hd- 50, 010 Avenue, NY 90001 United States</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="contact-card active"><i class="fa-solid fa-phone"></i>
                                <h4>phone number</h4>
                                <p><a href="#">009-215-5596 <span>(toll free)</span></a><a href="#">009-215-5595</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="contact-card"><i class="fa-solid fa-envelope"></i>
                                <h4>Support mail</h4>
                                <p><a href="#">contact@example.com</a><a href="#">info@example.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.3406974350205!2d90.48469931445422!3d23.663771197998262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b0d5983f048d%3A0x754f30c82bcad3cd!2sJalkuri%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1605354966349!5m2!1sen!2sbd" aria-hidden="false" tabIndex={0} /></div>
                        </div>
                        <div className="col-lg-6">
                            <form className="contact-form">
                                <h4>Drop Your Thoughts</h4>
                                <div className="form-group">
                                    <div className="form-input-group"><input className="form-control" type="text" placeholder="Your Name" /><i class="fa-solid fa-user"></i></div>
                                </div>
                                <div className="form-group">
                                    <div className="form-input-group"><input className="form-control" type="text" placeholder="Your Email" /><i class="fa-solid fa-envelope"></i></div>
                                </div>
                                <div className="form-group">
                                    <div className="form-input-group"><input className="form-control" type="text" placeholder="Your Subject" /><i class="fa-solid fa-bookmark"></i></div>
                                </div>
                                <div className="form-group">
                                    <div className="form-input-group"><textarea className="form-control" placeholder="Your Message" defaultValue={""} /><i class="fa-solid fa-paragraph"></i></div>
                                </div>
                                <button type="submit" className="form-btn-group"><i className="fas fa-envelope" /><span>send message</span></button>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="branch-card">
                                <img src={require("../images/branch/01.jpg")} alt="01.jpg" />
                                <div className="branch-overlay">
                                    <h3>dhaka</h3>
                                    <p>kawran bazar, 1100 east tejgaon, dhaka.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="branch-card">
                                <img src={require("../images/branch/02.jpg")} alt="02.jpg" />
                                <div className="branch-overlay">
                                    <h3>Narayanganj</h3>
                                    <p>west jalkuri, 1420 shiddirganj, narayanganj.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="branch-card">
                                <img src={require("../images/branch/03.jpg")} alt="03.jpg" />
                                <div className="branch-overlay">
                                    <h3>chandpur</h3>
                                    <p>east lautuli, 2344 faridganj, chandpur.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="branch-card">
                                <img src={require("../images/branch/04.jpg")} alt="04.jpg" />
                                <div className="branch-overlay">
                                    <h3>noakhli</h3>
                                    <p>begumganj, 3737 shonaimuri, noakhli.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Contact