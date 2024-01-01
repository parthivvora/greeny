import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import imageConstant from '../global/imageConstant'

function Profile() {
    return (
        <div>
            <Navbar />
            <section className="inner-section single-banner" style={{ background: `url(${imageConstant.SINGLE_BANNER})`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                <div className="container">
                    <h2>my profile</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">/ profile</li>
                    </ol>
                </div>
            </section>
            <section className="inner-section profile-part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="account-card">
                                <div className="account-title">
                                    <h4>Your Profile</h4><button data-bs-toggle="modal" data-bs-target="#profile-edit">edit profile</button>
                                </div>
                                <div className="account-content">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <div className="profile-image"><a href="#"><img src="images/user.png" alt="user" /></a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="form-group"><label className="form-label">name</label><input className="form-control" type="text" defaultValue="Miron Mahmud" /></div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="form-group"><label className="form-label">Email</label><input className="form-control" type="email" defaultValue="mironcoder@gmail.com" /></div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="profile-btn"><a href="change-password.html">change pass.</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="account-card">
                                <div className="account-title">
                                    <h4>contact number</h4><button data-bs-toggle="modal" data-bs-target="#contact-add">edit contact</button>
                                </div>
                                <div className="account-content">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4 alert fade show">
                                            <div className="profile-card contact active">
                                                <h6>primary</h6>
                                                <p>+8801838288389</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="account-card">
                                <div className="account-title">
                                    <h4>delivery address</h4><button data-bs-toggle="modal" data-bs-target="#address-add">edit address</button>
                                </div>
                                <div className="account-content">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4 alert fade show">
                                            <div className="profile-card address active">
                                                <h6>Home</h6>
                                                <p>jalkuri, fatullah, narayanganj-1420. word no-09, road no-17/A</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="modal fade" id="contact-add">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content"><button className="modal-close" data-bs-dismiss="modal"><i className="fa-solid fa-xmark" /></button>
                        <form className="modal-form">
                            <div className="form-title">
                                <h3>add new contact</h3>
                            </div>
                            <div className="form-group"><label className="form-label">number</label>
                                <input className="form-control" type="text" placeholder="Enter your number" />
                            </div>
                            <button className="form-btn" type="submit">save contact info</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="address-add">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content"><button className="modal-close" data-bs-dismiss="modal"><i className="fa-solid fa-xmark" /></button>
                        <form className="modal-form">
                            <div className="form-title">
                                <h3>add new address</h3>
                            </div>
                            <div className="form-group">
                                <label className="form-label">title</label>
                                <select className="form-select">
                                    <option>choose title</option>
                                    <option value="home">home</option>
                                    <option value="office">office</option>
                                    <option value="Bussiness">Bussiness</option>
                                    <option value="academy">academy</option>
                                    <option value="others">others</option>
                                </select></div>
                            <div className="form-group">
                                <label className="form-label">address</label>
                                <textarea className="form-control" placeholder="Enter your address" defaultValue={""} />
                            </div>
                            <button className="form-btn" type="submit">save address info</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="profile-edit">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content"><button className="modal-close" data-bs-dismiss="modal"><i className="fa-solid fa-xmark" /></button>
                        <form className="modal-form">
                            <div className="form-title">
                                <h3>edit profile info</h3>
                            </div>
                            <div className="form-group"><label className="form-label">profile image</label><input className="form-control" type="file" /></div>
                            <div className="form-group"><label className="form-label">name</label><input className="form-control" type="text" defaultValue="Miron Mahmud" /></div>
                            <div className="form-group"><label className="form-label">email</label><input className="form-control" type="text" defaultValue="mironcoder@gmail.com" /></div>
                            <button className="form-btn" type="submit">save profile info</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Profile