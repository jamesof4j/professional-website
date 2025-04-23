import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h2 className="text-red text-4xl font-bold">404 - Not Found</h2>
              <h2 className="text-teal mt-4 text-lg">
                The page you are looking for does not exist.
              </h2>
              <Link to={"/"} className="mt-6 text-blue-500 hover:underline">
                Go back to Home
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NotFoundPage;
