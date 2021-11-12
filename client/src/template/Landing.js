import React from "react";

const Landing = () => {
  return (
    <header className="masthead">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center text-white">
              {/*Page Heading*/}
              <h1 className="mb-5">Search a toilet near you!</h1>
              {/*Sign Up Form*/}
              <form
                className="form-subscribe"
                id="contactForm"
                data-sb-form-api-token="API_TOKEN"
              >
                {/*Location Search*/}
                <div className="row">
                  <div className="col">
                    <input
                      className="form-control form-control-lg"
                      id="emailAddress"
                      type="email"
                      placeholder="Enter zipcode here"
                    />{" "}
                    {/*can be included: data-sb-validations="required,email"*/}
                    {/* <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div> */}
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-primary btn-lg disabled"
                      id="submitButton"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    <p>To activate this form, sign up at</p>
                    <a className="text-white" href="#signup">
                      provide link
                    </a>{" "}
                    {/* provide links for this part */}
                  </div>
                </div>
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
