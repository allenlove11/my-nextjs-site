import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Contact"} />
      {/*==================================================*/}
      {/* Start Thrown Pricing Area */}
      {/*==================================================*/}
      <div className="contact-inner-page">
        <div className="container">
          <div className="row inner mb-150">
            <div className="col-lg-4 col-md-6">
              <div className="contact-inner-box">
                <div className="contact-inner-icon">
                  <i className="bi bi-telephone-x" />
                </div>
                <div className="contact-content">
                  <h4>Phone Number</h4>
                  <span>012-345-6789</span>
                  <span>539-737-1380</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-inner-box">
                <div className="contact-inner-icon">
                  <i className="bi bi-envelope-open" />
                </div>
                <div className="contact-content">
                  <h4>E-mail</h4>
                  <span>inquiry@example.com</span>
                  <span>info@example.com</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-inner-box two">
                <div className="contact-inner-icon">
                  <i className="bi bi-geo-alt" />
                </div>
                <div className="contact-content">
                  <h4>Address</h4>
                  <span>27 Division St, New York</span>
                  <span>NY 10002, USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="contact-box inner">
              <div className="contact-title">
                <h2>Have be any question?</h2>
                <h2>feel free to Contact</h2>
              </div>
             
              <div id="status" />
            </div>
          </div>
        </div>
      </div>

    </ThrownLayout>
  );
};
export default page;
