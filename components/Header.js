const Header = () => {
  return (
    <header>
      <img
        data-aos="fade-down"
        className="img-wave"
        src="/assets/img/wave(1).svg"
        alt="Nền"
      />
      <nav className="navbar navbar-light navbar-expand-md navigation-clean py-2">
        <div className="container">
          <img
            className="mr-3"
            src="/assets/img/favicon-32x32.png?h=dada6ed6c75053e6f84520a87241cd23"
            alt="logo"
            width="32"
            height="32"
          />
          <a className="navbar-brand p-0" href="/">
            <h6 className="text-uppercase m-0 p-0">loa loa team</h6>{" "}
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Trang chủ
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Dự án
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/docs">
                  Tài liệu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blogs">
                  Bài viết
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
