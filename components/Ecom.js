const Ecom = () => {
  return (
    <section className="text-center p-4" id="price">
      <div className="container" data-aos="fade-up">
        <div className="mb-4 box-header">
          <h4 className="text-uppercase text-secondary font-sm">bắt đầu</h4>
          <h4 className="font-weight-bold">Bán Hàng Online</h4>
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
                Cơ Bản
              </h5>
              <p className="p-desc text-secondary">
                Cung cấp giao diện đẹp mắt cho nhà bán hàng cá nhân hoặc cửa
                hàng.&nbsp;
              </p>
              <div className="mb-3">
                <h6 className="d-inline-block font-weight-bold">0 đ</h6>
                <h5 className="d-inline-block text-desc">&nbsp;/ tháng</h5>
              </div>
              <p>Báo đơn siêu tốc</p>
            </div>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="/standard.html">
              <div className="p-4 bg-primary rounded-1">
                <div>
                  <h5 className="text-center text-light font-weight-bold">
                    Tiện Lợi
                  </h5>
                  <p className="text-light p-desc text-secondary">
                    Là gói Cơ Bản mở rộng với tên miền tùy chỉnh.
                  </p>
                  <div className="text-light mb-3">
                    <h6 className="text-light d-inline-block font-weight-bold">
                      149.000 đ
                    </h6>
                    <h5 className="d-inline-block text-desc">&nbsp;/ tháng</h5>
                  </div>
                </div>
                <p className="text-light">Tền miền tùy chỉnh</p>
              </div>
            </a>
          </div>
          <div
            className="col text-center p-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="o-50">
              <h5 className="text-center text-primary font-weight-bold">
                Đầy Đủ (Sắp Ra Mắt)
              </h5>
              <p className="p-desc text-secondary">
                Nếu bạn đang bán hàng online cần thanh toán online và tính phí
                ship.
              </p>
              <div className="mb-3">
                <h6 className="d-inline-block font-weight-bold">245.000 đ</h6>
                <h5 className="d-inline-block text-desc">&nbsp;/ tháng</h5>
              </div>
              <p>Ship và thanh toán</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ecom;
