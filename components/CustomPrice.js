const CustomPrice = () => {
  return (
    <section className="text-center p-4" id="price-3">
      <div className="container" data-aos="fade-up">
        <div className="mb-4 box-header">
          <h4 className="text-uppercase text-secondary font-sm">
            bạn muốn giao diện độc nhất?
          </h4>
          <h5 className="font-weight-bold">Thiết Kế Theo Yêu Cầu</h5>
          <div className="text-warning divider-hl"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-sm-6 col-md-4 text-center py-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="px-4 bl">
              <h5 className="text-center text-primary font-weight-bold">
                Thương Hiệu
              </h5>
              <p className="p-desc text-secondary">Giao diện theo yêu cầu.</p>
              <div className="mb-3">
                <h6 className="d-inline-block font-weight-bold">6.000.000 đ</h6>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="/projects.html">
              <div className="p-4 rounded-1 bg-primary">
                <div>
                  <h5 className="text-center text-light font-weight-bold">
                    Chuyên Nghiệp
                  </h5>
                  <p className="text-light p-desc text-secondary">
                    Thương mại điện tử. Các trang có độ phức tạp cao.
                  </p>
                  <div className="text-light mb-3">
                    <h6 className="d-inline-block font-weight-bold">
                      15.000.000 đ
                    </h6>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div
            className="col text-center p-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              <h5 className="text-center text-primary font-weight-bold">
                Quản Lý
              </h5>
              <p className="p-desc text-secondary">
                Số hóa các hoạt động của doanh nghiệp.
              </p>
              <div className="mb-3">
                <h6 className="d-inline-block font-weight-bold">
                  40.000.000 đ
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CustomPrice;
