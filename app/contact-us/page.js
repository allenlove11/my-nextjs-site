import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";

const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Contact"} />
      
      {/*==================================================*/}
      {/* Start Contact Area */}
      {/*==================================================*/}
      <div className="contact-inner-page">
        <div className="container">
          <div className="row inner mb-150 justify-content-center">
            {/* 只保留 E-mail 卡片，并修改标题 */}
            <div className="col-lg-6 col-md-8">
              <div className="contact-inner-box">

                <div className="contact-content">
                  <h4>Panda Glass Authorized Distributor</h4>
                  <p style={{ color: "#777", marginBottom: "10px", fontSize: "0.9rem" }}>(Panda Glass 授权代理商)</p>
                  <div className="email-link" style={{ marginTop: "15px" }}>
                  <div className="contact-inner-icon">
                  <i className="bi bi-envelope-open" />
                </div>
                    <span style={{ fontWeight: "600", color: "#333", marginRight: "10px" }}>E-mail:</span>
                    <a href="mailto:Rose.du@panda-glass.cc" style={{ color: "#0c5398", fontWeight: "600" }}>
                      Rose.du@panda-glass.cc
                    </a>
                  </div>
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

      {/* 如果需要显示合作伙伴轮播图可以加上 */}
      {/* <BrandSlider /> */}
      
    </ThrownLayout>
  );
};

export default page;