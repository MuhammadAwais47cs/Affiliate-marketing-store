import React from 'react'
import { contentData } from './data'
function Privacy() {
    return (
      <section className="bg-light ">
        <div className="pt-5 "></div>
        <div className="d-flex flex-row justify-content-center py-2 con container ">
          {contentData.map(({ id, heading, para }) => (
            <div className="col-md-12 pe-md-3" key={id}>
              <h2 className="py-3">{heading}</h2>
              <p className="text-secondary pe-md-5 me-lg-5">{para} </p>
            </div>
          ))}
        </div>
      </section>
    );
}

export default Privacy
