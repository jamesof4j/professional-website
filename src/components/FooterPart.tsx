function FooterPart() {
  return (
    <>
      <section className="contact-section bg-black">
        <div className="container px-1">
          <div className="social d-flex justify-content-center">
            <a
              className="mx-2"
              href="https://www.linkedin.com/in/james-dybisz-18347432/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="mx-2"
              href="https://github.com/jamesof4j"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="container px-1 bg-black">
          <div className="text-center">
            <a href="./assets/resume.pdf">
              <h1 className="DownloadFix">Download Resume</h1>
            </a>
          </div>
        </div>
      </section>
      <footer className="footer bg-black small text-center text-white-50">
        <div className="container px-4 px-lg-5">
          Copyright &copy; James Rocco Dybisz 2011 - 2025
        </div>
      </footer>
    </>
  );
}

export default FooterPart;
