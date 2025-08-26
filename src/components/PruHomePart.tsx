function PruHomePart() {
  return (
    <>
      <header className="masthead PRUmasthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center PruJustify">
            <div className="text-center">
              <h2 className="text-black mx-auto mt-2 mb-3">In Memoriam</h2>
              <h1 className="mx-auto my-0 text-uppercase PrunellaHeroText">
                Prunella
              </h1>
              <h3 className="text-black mx-auto mt-1 mb-5">
                11/4/2016 - 8/23/2025
              </h3>
            </div>
          </div>
        </div>
      </header>
      <img
        src="../assets/img/bg-prunella.jpg"
        alt=""
        style={{ display: "none" }}
      />
    </>
  );
}

export default PruHomePart;
