import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Christopher</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer_link">Testimonials</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://github.com/Topitops69" className="footer_social-link" target="_blank"
                rel="noreferrer">
                <i class="bx bxl-github"></i>
                </a>

                <a href="https://www.facebook.com/topitops05?mibextid=ZbWKwL" className="footer_social-link" target="_blank" rel="noreferrer">
                <i class='bx bxl-facebook'></i>
                </a>

                <a href="https://www.linkedin.com/in/christopher-c-083561124" className="footer_social-link" target="_blank" rel="noreferrer">
                <i class='bx bxl-linkedin'></i>
                </a>
            </div>

            <span className="footer_copy">&#169; Christopher Castro. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer