import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row gx-6">
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget">
              <div className="footer-wiget-log">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="/assets/images/footer-logo.png" alt="" />
                  </a>
                </Link>
              </div>

              <div className="footer-shape-title">
  <p style={{
    paddingTop: "20px",
    color: "white"
  }}>
    Sichuan Hongke Innovation Technology Co., Ltd. is mainly engaged in the research, 
    development, manufacturing and sales of protective glass for smart terminal displays, 
    special glass for aerospace and new optical materials. It is the first high-tech 
    enterprise in China to simultaneously realize the industrialization of high-alumina 
    cover glass and lithium aluminum silicon cover glass.
  </p>
</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget">
              <div className="footer-wiget-title">
                <h4>Links</h4>
              </div>
              <div className="footer-wiget-menu">
                <ul>
                  <li>
                    <a href="#"> About us</a>
                  </li>
                  <li>
                    <a href="#"> Meet our team</a>
                  </li>
                  <li>
                    <a href="#"> Case stories</a>
                  </li>
                  <li>
                    <a href="#"> Latest news</a>
                  </li>
                  <li>
                    <a href="#"> Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget">
              <div className="footer-wiget-title">
                <h4>Other Link</h4>
              </div>
              <div className="footer-wiget-menu">
                <ul>
                  <li>
                    <a href="#"> Faq</a>
                  </li>
                  <li>
                    <a href="#"> Tearm of user</a>
                  </li>
                  <li>
                    <a href="#"> Disclaimer</a>
                  </li>
                  <li>
                    <a href="#"> Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pr-0">
            <div className="foter-box">
              <div className="footer-wiget-icon">

              </div>
              <div className="footer-widget-contct-menu">
                <ul>
                  <li className="line">
                    <a href="#">Rose.du@panda-glass.cc</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-100">
          <div className="col-lg-6 col-md-12">
            <div className="copyright-text">
              <p>
                Copyright © <a href="#">Website_Stock</a> All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="footer-condition">
              <ul>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
