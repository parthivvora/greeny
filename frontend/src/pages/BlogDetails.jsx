import React from 'react'
import imageConstant from '../global/imageConstant'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function BlogDetails() {
    const blogId = useParams()
    console.log(blogId);
    return (
        <div>
            <Navbar />
            <section className="inner-section single-banner" style={{ background: `url(${imageConstant.SINGLE_BANNER})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="container">
                    <h2>blog details</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href="/blog">/ Blog</a></li>
                        <li className="breadcrumb-item active" aria-current="page">/ Blog Details</li>
                    </ol>
                </div>
            </section>
            <section className="inner-section blog-details-part">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-xl-10">
                            <article className="blog-details"><a className="blog-details-thumb" href="#"><img src={require("../images/blog/01.jpg")} alt="01.jpg" /></a>
                                <div className="blog-details-content">
                                    <ul className="blog-details-meta">
                                        <li><i className="fa-solid fa-calendar-days" /><span>february 02, 2021</span></li>
                                        <li><i className="fa-solid fa-user"></i><span>Miron mahmud</span></li>
                                        <li><i className="fa-solid fa-comments"></i><span>25 comments</span></li>
                                        <li><i className="fa-solid fa-square-share-nodes"></i><span>34 share</span></li>
                                    </ul>
                                    <h2 className="blog-details-title">Adipisicing elit. Earum beatae, eius voluptates lorem ipsum
                                        dolor sit amet consectetur.</h2>
                                    <p className="blog-details-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Molestias repellendus laudantium at optio ex, magnam illo ducimus placeat voluptates
                                        officiis molestiae ratione assumenda dignissimos est id hic veritatis. Aspernatur
                                        aliquam praesentium officiis pariatur velit nesciunt debitis odio, dolores harum, quidem
                                        nobis enim. Incidunt quia doloremque ipsam optio repudiandae non ipsa.</p>
                                    <p className="blog-details-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Voluptas est nisi ut eius quod? Libero, labore. Omnis maiores at, incidunt odit commodi,
                                        possimus voluptas porro sunt beatae laboriosam provident. Id, sit laborum accusantium
                                        quia ad aut eaque obcaecati eos, <a href="#">adipisci</a>molestias quasi nostrum harum
                                        nihil, rerum totam doloribus perspiciatis quos reiciendis voluptatibus. Eos numquam
                                        eaque sed nemo illo optio quos facere, at alias! Doloremque nemo, porro neque magnam
                                        voluptatem harum at quidem. Porro asperiores facere veritatis consequatur. Minus amet
                                        error nam laudantium omnis modi molestias, ex eveniet sed non. Veniam quas aspernatur
                                        quisquam aut quis ea iusto, officia eos sunt vel, voluptatibus incidunt ut eius nesciunt
                                        perspiciatis modi reiciendis fugit alias autem, dolorum mollitia esse earum? Doloribus
                                        illum culpa eligendi!</p>
                                    <div className="blog-details-footer">
                                        <ul className="blog-details-share">
                                            <li><span>share:</span></li>
                                            <li><a href="#" className="fa-brands fa-facebook-f" /></li>
                                            <li><a href="#" className="fa-brands fa-twitter" /></li>
                                            <li><a href="#" className="fa-brands fa-linkedin" /></li>
                                            <li><a href="#" className="fa-brands fa-instagram" /></li>
                                            <li><a href="#" className="fa-brands fa-pinterest-p" /></li>
                                        </ul>
                                        <ul className="blog-details-tag">
                                            <li><span>tags:</span></li>
                                            <li><a href="#">farming</a></li>
                                            <li><a href="#">organic</a></li>
                                            <li><a href="#">health</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <div className="blog-details-comment">
                                <h3 className="comment-title">02 Comments</h3>
                                <ul className="comment-list">
                                    <li className="comment-item">
                                        <div className="comment-media"><a className="comment-avatar" href="#"><img src={require("../images/avatar/01.jpg")} alt="01.jpg" /></a>
                                            <h6 className="comment-meta"><a href="#">miron mahmud</a><span>June 02, 2020</span></h6>
                                        </div>
                                        <p className="comment-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                                            hic amet qui velit, molestiae suscipit perferendis, autem doloremque blanditiis
                                            dolores nulla excepturi ea nobis!</p>
                                        <form className="comment-reply"><input type="text" placeholder="reply your comment" /><button><i className="icofont-reply" />reply</button></form>
                                        <ul className="comment-reply-list">
                                            <li className="comment-reply-item">
                                                <div className="comment-media"><a className="comment-avatar" href="#"><img src={require("../images/avatar/02.jpg")} alt="02.jpg" /></a>
                                                    <h6 className="comment-meta"><a href="#">labonno khan</a><span>June 02,
                                                        2020</span></h6>
                                                </div>
                                                <p className="comment-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Ducimus hic amet qui velit, molestiae suscipit perferendis, autem doloremque
                                                    blanditiis dolores</p>
                                                <form className="comment-reply"><input type="text" placeholder="reply your comment" /><button><i className="icofont-reply" />reply</button></form>
                                            </li>
                                            <li className="comment-reply-item">
                                                <div className="comment-media"><a className="comment-avatar" href="#"><img src={require("../images/avatar/03.jpg")} alt="03.jpg" /></a>
                                                    <h6 className="comment-meta"><a href="#">tahmina bonny</a><span>June 02,
                                                        2020</span></h6>
                                                </div>
                                                <p className="comment-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Ducimus hic amet qui velit, molestiae suscipit perferendis, autem doloremque
                                                    blanditiis dolores</p>
                                                <form className="comment-reply"><input type="text" placeholder="reply your comment" /><button><i className="icofont-reply" />reply</button></form>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="comment-item">
                                        <div className="comment-media"><a className="comment-avatar" href="#"><img src={require("../images/avatar/04.jpg")} alt="04.jpg" /></a>
                                            <h6 className="comment-meta"><a href="#">shipu shikdar</a><span>June 02, 2020</span>
                                            </h6>
                                        </div>
                                        <p className="comment-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                                            hic amet qui velit, molestiae suscipit perferendis, autem doloremque blanditiis
                                            dolores nulla excepturi ea nobis!</p>
                                        <form className="comment-reply"><input type="text" placeholder="reply your comment" /><button><i className="icofont-reply" />reply</button></form>
                                    </li>
                                </ul>
                            </div>
                            <form className="blog-details-form">
                                <h3 className="details-form-title">post comment</h3>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group"><textarea className="form-control" placeholder="write your comment" defaultValue={""} /></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group"><input type="text" className="form-control" placeholder="enter your name" /></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group"><input type="email" className="form-control" placeholder="enter your email" /></div>
                                    </div>
                                </div><button className="form-btn">post comment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default BlogDetails