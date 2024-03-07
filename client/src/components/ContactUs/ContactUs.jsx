import React from 'react'
function ContactUs() {
    return (
      <>
        <section className="bg-light ">
          {/* <div className="bg-danger-subtle py-4 ">
            <h1 className="text-center pt-5 mt-2 text-danger">
              Haben Sie Fragen? Wir würden es gerne hören.
            </h1>
            <p className="text-center pb-3 pt-2">
              Egal, ob Sie neugierig auf unseren Service, Ihren Bestellstatus
              oder … sind Retouren – wir beantworten gerne alle Fragen
            </p>
          </div> */}
          <div className="d-flex flex-row justify-content-center py-2 ">
            {/* <div className="col-md-4 mt-5">
        <div className='px-5'>
            <h2 className='py-5'>Contact Details</h2>
            
            <h6>
            23 Takbeer Block Bahria Town Lahore
            </h6>
            <h6>
            pakistan 
            </h6>
            <h4 className=' mt-5 mb-4'>
            +92-312-4709123
            </h4>
            <p >
            info@shoppingmall.com
            </p>
        </div>
        </div> */}
            <div className="col-md-8">
              <form className="row g-3 pt-4 ">
                <h2 className="py-5 text-center">Kontakt Formular</h2>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    Vorname <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder=""
                    aria-label="First name"
                  />
                </div>
                {/* <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    Familienname{" "}
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    aria-label="Last name"
                  />
                </div> */}
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                {/* <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    Nummer{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div> */}

                <div className="col-md-12">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Nachricht <span className="text-danger">*</span>
                  </label>
                  <textarea
                    required
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-outline-danger rounded-pill"
                  >
                    In Kontakt kommen
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
}

export default ContactUs
