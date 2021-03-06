const Footer = () => {
  return (
    <footer className="footer-clean">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-4 col-md-3 item">
            <h3 className="text-primary">Dịch vụ</h3>
            <ul className="list-unstyled">
              <li>
                <a className="text-body" href="#">
                  Thiết kế website
                </a>
              </li>
              <li>
                <a className="text-body" href="#">
                  Phát triển phần mềm
                </a>
              </li>
              <li>
                <a className="text-body" href="#">
                  Hosting
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm-4 col-md-3 item">
            <h3 className="text-primary">Phát triển bởi</h3>
            <ul className="list-inline d-inline">
              <li className="list-inline-item d-inline-block">
                Sinh viên trường ĐH Bách Khoa Đà Nẵng.
              </li>
            </ul>
            <h3 className="text-primary">Công ty</h3>
            <ul className="list-unstyled">
              <li>Công ty TNHH Công Nghệ Điện Tử Quảng Đà.</li>
              <li>Mã số thuế: 4001202704.</li>
              <li>
                Địa chỉ: Thôn 2, Xã Bình Đào, Huyện Thăng Bình, Tỉnh Quảng Nam.
                <br />
              </li>
              <li></li>
            </ul>
          </div>

          <div className="col-sm-4 col-md-3 item">
            <h3 className="text-primary">Liên hệ</h3>
            <ul className="list-unstyled">
              <li>Leader: Trần Ngọc Huy</li>
              <li>Điện thoại/Zalo: 0332813077</li>
              <li>Địa chỉ: 54 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng.</li>
              <li></li>
            </ul>
            <img
              className="w-100"
              src="/assets/img/zalo.jpg?h=614debe3b6ec66917ebd818aa1c50b6e"
              loading="lazy"
              alt="Zalo"
            />
          </div>
        </div>
      </div>
      <img
        src="/assets/img/wave(2).svg?h=5ad7ab1ad1557422fec002e92b1ae54b"
        alt="Nền"
      />
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js"></script> */}
      {/* <script src="/assets/js/smart-forms.min.js?h=db5fbbc34070d36ea9b98958ab6f065c"></script> */}
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script> */}
      {/* <script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/prism.min.js"
        integrity="sha512-9+422Bs3A87UkWfp+qV80Nfv9arhbCXKY1rxrF2seorI36mIIstMiuBfyKLF1yH1nnzQkEWq2xrzT4XU3Z+vrA=="
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/components/prism-typescript.min.js"
        integrity="sha512-5KnWNKu6jz8OE4nIBndz3PZ4O3RGqcPNcsyEFZkx3F5N8liSwc3bCe4qPOa/a3+e4CxVl0izHMXeZ0Z4yk7LTA=="
        crossorigin="anonymous"
      ></script> */}
      {/* <script src="/assets/js/script.min.js?h=258fb4a324cc9d5037487a7dc0b1362c"></script> */}
    </footer>
  );
};
export default Footer;
