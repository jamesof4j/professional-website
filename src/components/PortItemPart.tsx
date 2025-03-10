import { ReactNode } from "react";

interface Props {
  side: string;
  title: string;
  image: string;
  children?: ReactNode;
  link?: string;
}

const PortfolioPart = ({
  side = "left",
  title,
  image,
  children,
  link,
}: Props) => {
  return (
    <>
      {side === "left" && (
        <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
          <div className="col-lg-6">
            <img className="img-fluid" src={image} alt="..." />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="NoUnderline"
                  >
                    <h4 className="text-white">{title}</h4>
                    <p className="mb-0 text-white-50">{children}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {side === "right" && (
        <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
          <div className="col-lg-6">
            <img className="img-fluid" src={image} alt="..." />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="NoUnderline"
                  >
                    <h4 className="text-white">{title}</h4>
                    <p className="mb-0 text-white-50">{children}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioPart;
