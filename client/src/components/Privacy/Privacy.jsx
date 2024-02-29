import React from 'react'
import { contentData } from './data'
function Privacy() {
    return (
      <section className="bg-light ">
        <div className="py-1 "></div>
        <div className="d-flex flex-row justify-content-center py-0 con container ">
          {contentData.map(({ id, heading, para }) => (
            <div className="col-md-11 pe-md-3" key={id}>
              <h5 className="py-2">{heading}</h5>
              <p className="text-secondary pe-md-5 me-lg-5">{para} </p>
            </div>
          ))}
        </div>
        <div className="py-1 "></div>
      </section>
    );
}

export default Privacy
