const Banner = () => {
  return (
    <section className="d-lg-flex align-items-lg-center pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-lg-5 col-xl-5 d-lg-flex order-2 order-md-1 align-items-lg-center">
            <section className="py-3">
              <h1 className="display-4 shake animated">
                Giải pháp&nbsp;
                <label className="text-primary font-weight-bold">
                  Website/App
                </label>
              </h1>
              <h2 data-aos="zoom-in">HỖ TRỢ PHỤC HỒI SAU DỊCH COVID-19</h2>
              <ul className="text-secondary">
                <li data-aos="fade-right" data-aos-duration="100">
                  Miễn phí khởi tạo.
                </li>
                <li data-aos="fade-right" data-aos-duration="200">
                  Bao gồm domain, hosting, ssl.
                </li>
                <li data-aos="fade-right" data-aos-duration="300">
                  Không phát sinh chi phí.
                </li>
              </ul>
              <h3 data-aos="fade-up" data-aos-duration="400">
                Có ngay website&nbsp;
                <span className="text-primary">
                  <strong>bán hàng</strong>
                </span>
                &nbsp;chỉ với
                <span className="text-primary">
                  <strong>100.000</strong>
                </span>
                <strong>&nbsp;</strong>tháng.
              </h3>
              <p className="text-secondary">
                <em>* Chỉ hỗ trợ cài miễn phí cho 10 shop đầu tiên.</em>
              </p>
              <img
                className="shake animated img-ab"
                src="/assets/img/decor-lp.png?h=65686a6380bfcc6bda5e88e5641a28e2"
                alt="Highlight"
              />
            </section>
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 d-md-flex order-1 align-items-md-center order-md-2 w-100">
            <img
              className="img-fluid w-100"
              data-aos="zoom-in"
              src="/assets/img/Personal%20site-cuate.svg?h=8c2ed189e86078111fc282bd9a3c5f7e"
              alt="Ảnh bìa"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
