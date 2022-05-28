import React from 'react';
import './Contact.css';
import propic from "./img/propic.jpeg"
import linkSvg from "./img/linkedin.gif"
import github from "./img/github.gif"
import mail from "./img/mail.gif"
import phone from "./img/phone.gif"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white"> Connect with me via :</p>
                        </div>
                        <div className='contactCard'>
                            <div className='linkDiv'>
                            <img id='linkimg' src={phone}></img>
                                <h2><strong>+91 - 976 465 002 2</strong></h2>
                               
                            </div>
                            <div className='linkDiv'>
                            <img id='linkimg' src={github}></img>
                                <h2><a href="https://github.com/umeshyadavrocks"><strong>https://github.com/umeshyadavrocks</strong></a></h2>
                            </div>
                            <div className='linkDiv'>
                            <img id='linkimg' src={mail}></img>
                                <h2><strong>umeshyadavrocks@gmail.com</strong></h2>
                                
                            </div>
                            <div className='linkDiv'>
                                <img id='linkimg' src={linkSvg}></img>
                                <h2><a href="https://www.linkedin.com/in/umesh-yadav-618256b6/"><strong>https://www.linkedin.com/in/umesh-yadav-618256b6/</strong></a></h2>
                                
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={propic} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
