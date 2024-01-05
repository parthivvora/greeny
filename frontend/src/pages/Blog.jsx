import React from 'react'
import { imageConstant } from '../global/imageConstant';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Blog() {
    return (
        <div>
            <Navbar />
            <section className="inner-section single-banner" style={{ background: `url(${imageConstant.SINGLE_BANNER})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="container">
                    <h2>blog</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page"> / Blog</li>
                    </ol>
                </div>
            </section>
            <section className="inner-section blog-grid">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="top-filter">
                                        <div className="filter-short">
                                            <label className="filter-label">Short by :</label>
                                            <select className="form-select filter-select">
                                                <option>default</option>
                                                <option value={3}>recent</option>
                                                <option value={1}>featured</option>
                                                <option value={2}>recommend</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-6">
                                    <div className="blog-card">
                                        <div className="blog-media">
                                            <a className="blog-img" href="/blog/1"><img src={require("../images/blog/01.jpg")} alt="01.jpg" /></a></div>
                                        <div className="blog-content">
                                            <ul className="blog-meta">
                                                <li><i className="fas fa-user" /><span>admin</span></li>
                                                <li><i className="fas fa-calendar-alt" /><span>february 02, 2021</span></li>
                                            </ul>
                                            <h4 className="blog-title"><a href="blog-details.html">Voluptate blanditiis provident Lorem ipsum dolor sit amet</a></h4>
                                            <p className="blog-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... </p>
                                            <Link className='blog-btn' to={`/blog/1`}><span>read more</span><i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="blog-card">
                                        <div className="blog-media">
                                            <Link className="blog-img" to={`/blog/2`}><img src={require("../images/blog/02.jpg")} alt="02.jpg" /></Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="blog-meta">
                                                <li><i className="fas fa-user" /><span>admin</span></li>
                                                <li><i className="fas fa-calendar-alt" /><span>february 02, 2021</span></li>
                                            </ul>
                                            <h4 className="blog-title"><a href="blog-details.html">Voluptate blanditiis provident Lorem ipsum dolor sit amet</a></h4>
                                            <p className="blog-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... </p>
                                            <Link className='blog-btn' to={`/blog/2`}><span>read more</span><i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="blog-card">
                                        <div className="blog-media">
                                            <Link className="blog-img" to={`/blog/3`}><img src={require("../images/blog/03.jpg")} alt="03.jpg" /></Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="blog-meta">
                                                <li><i className="fas fa-user" /><span>admin</span></li>
                                                <li><i className="fas fa-calendar-alt" /><span>february 02, 2021</span></li>
                                            </ul>
                                            <h4 className="blog-title"><a href="blog-details.html">Voluptate blanditiis provident Lorem ipsum dolor sit amet</a></h4>
                                            <p className="blog-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... </p>
                                            <Link className='blog-btn' to={`/blog/3`}><span>read more</span><i className="fa-solid fa-arrow-right" /></Link>
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
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Blog