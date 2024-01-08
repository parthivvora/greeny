import React, { useCallback, useEffect, useState } from 'react'
import { IMAGEBASEURL_BLOG, imageConstant } from '../global/imageConstant';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { apiKeys, apiTypes } from '../global/apiKeys';
import makeApiRequest from '../global/apiCall';

function BlogDetails() {
    const { blogId } = useParams()
    const [blogData, setBlogData] = useState()

    // Get single blog details
    const getSingleBlogDetails = useCallback(() => {
        makeApiRequest(apiTypes.GET, `${apiKeys.getSingleBlog}/${blogId}`, null, null, null)
            .then((response) => {
                // console.log("🚀 ~ file: BlogDetails.jsx:18 ~ .then ~ response:", response)
                setBlogData(response.data.blogData)
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }, [blogId])

    useEffect(() => {
        getSingleBlogDetails()
    }, [blogId])


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
                            <article className="blog-details"><a className="blog-details-thumb">
                                <img src={`${IMAGEBASEURL_BLOG}${blogData?.blogImage}`} alt={blogData?.blogImage} />
                            </a>
                                <div className="blog-details-content">
                                    <ul className="blog-details-meta">
                                        <li><i className="fa-solid fa-calendar-days" /><span>{blogData?.blogDate}</span></li>
                                        <li><i className="fa-solid fa-user"></i><span>Admin</span></li>
                                        <li><i className="fa-solid fa-comments"></i><span>25 comments</span></li>
                                        <li><i className="fa-solid fa-square-share-nodes"></i><span>34 share</span></li>
                                    </ul>
                                    <h2 className="blog-details-title">{blogData?.blogTitle}</h2>
                                    <p className="blog-details-desc">{blogData?.blogDescription}</p>
                                    <div className="blog-details-footer">
                                        <ul className="blog-details-share">
                                            <li><span>share:</span></li>
                                            <li><a href="#" className="fa-brands fa-facebook-f" /></li>
                                            <li><a href="#" className="fa-brands fa-twitter" /></li>
                                            <li><a href="#" className="fa-brands fa-linkedin" /></li>
                                            <li><a href="#" className="fa-brands fa-instagram" /></li>
                                            <li><a href="#" className="fa-brands fa-pinterest-p" /></li>
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