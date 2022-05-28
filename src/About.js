import React from "react";
import "./About.css";
import propic from "./img/propic.jpeg";
import Contact from "./Contact";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={propic} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              Observant and detail-oriented aspiring full-stack developer with a specialization in MERN stack. Self-motivated and curious, with a keen interest in building user-centric products. Looking forward to honing  skills in a challenging work environment.
              </p>
              <p className="about__text p__color">
                
              </p>
              <p className="about__text p__color">
                
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://docs.google.com/document/d/1VzGbjxbCi3hvxf_hC_r0LGZY8k3I3bvBpXFX5cDjN-c/edit?usp=sharing">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="</Contact>">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
