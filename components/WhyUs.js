const WhyUs = () => {
  return (
    <section id="desc" className="pt-5">
      <div className="container">
        <div className="row py-5">
          <div
            className="col-md-7 col-lg-6 col-xl-7 d-sm-flex justify-content-sm-center"
            data-aos="zoom-in"
          >
            <a className="w-100" href="/standard.html">
              <img
                className="img-fluid w-100"
                data-aos="zoom-in"
                src="/assets/img/Add%20notes-pana.svg?h=31a520e11dd1aa5c97714f715192701a"
                loading="lazy"
                alt="Ảnh giới thiệu"
              />
            </a>
          </div>
          <div className="col-12 col-md-5 col-lg-6 col-xl-5 d-lg-flex align-items-lg-center">
            <section className="py-3">
              <h1 data-aos="fade-right">
                Loa Loa&nbsp;
                <label className="text-primary">là lựa chọn hoàn hảo.</label>
              </h1>
              <p
                className="text-justify text-secondary mb-4 font-weight-bold"
                data-aos="fade-right"
              >
                <em>
                  Hãy tập trung vào những tính năng thực sự cần thiết với giao
                  diện dễ dàng sử dụng cho bất cứ ai.
                </em>
              </p>
              <ul className="text-secondary">
                <li data-aos="fade-up" data-aos-duration="100">
                  Giao diện hiện đại, tối giản.
                </li>
                <li data-aos="fade-up" data-aos-duration="200">
                  Tính năng bán hàng chuẩn.
                </li>
                <li data-aos="fade-up" data-aos-duration="300">
                  Không cần kiểm tra đơn thường xuyên.
                </li>
              </ul>
              <p
                className="text-justify mb-4 font-weight-bold"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                Quá nhiều tính năng sẽ gây khó khăn trong việc quản trị. Và kiến
                khách hàng rời bỏ website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
