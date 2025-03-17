import AboutImage from "../assets/img/phoneanddice.png";
import Resume from "../assets/resume.pdf";

function AboutPart() {
  return (
    <section className="about-section text-center" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-12">
            <h2 className="text-white mb-4">
              Professional Web and Game Development
            </h2>
            <p className="text-white-50">
              With more than fifteen years of experience, I have the skills and
              knowledge to create and implement the worlds' more innovated and
              complex interactive web applications and games. I have a strong
              foundation in team leadership, programming, design, and I am
              always looking for new and innovative ways to improve my craft. I
              am passionate about directing team members and peers to success,
              and I am dedicated to delivering high-quality work that meets the
              needs of my clients.
            </p>
          </div>
        </div>
        <div className="container pb-4">
          <div className="text-center">
            <h2 className="ForceTeal">
              Contact me at:{" "}
              <a href="mailto:jamesdybisz@gmail.com">jamesdybisz@gmail.com</a>
            </h2>
            <a href={Resume}>
              <h1 className="DownloadFix">Download Resume</h1>
            </a>
          </div>
        </div>
        <img className="img-fluid" src={AboutImage} alt="..." />
      </div>
    </section>
  );
}

export default AboutPart;
