import { Link } from "react-router-dom";
function NavigationPart() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <Link to="/prunella">
          <i className="fa fa-cat fa-2x mb-2 mx-2 PrunellaLinkFix"></i>
        </Link>
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">
            James R Dybisz
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Professional Work
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationPart;
