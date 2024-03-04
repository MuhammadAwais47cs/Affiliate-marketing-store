import React from "react";
import "../footer/Footer.css";

import approved from "../assets/feature-approved.svg";
import delivery from "../assets/feature-delivery.svg";
import warranty from "../assets/feature-warranty.svg";
const svg = [
  {
    img: approved,
    heading: "PTA Approved",
    para: `Suchen Sie auf der Website nach dem Gutschein. Klick es an. Sobald die neue Seite geöffnet wird, kopieren Sie den Gutscheincode. Klicken Sie dann auf die Schaltfläche „Zum Shop gehen“, um diesen Gutschein einzulösen.`,
  },
  {
    img: warranty,
    heading: "1 Year",
    para: "Wenn Sie auf diese Schaltfläche klicken, gelangen Sie zur Store-Seite des gewünschten Produkts.",
  },
  {
    img: delivery,
    heading: "24hr Delivery",
    para: `Gehen Sie als Nächstes auf die Website des Shops und suchen Sie nach dem gewünschten Produkt. Wenn Sie zum Kauf bereit sind, geben Sie den Gutscheincode auf der Zahlungsseite ein, um Ihren Einkauf zu genießen.`,
  },
];
const Footer = () => {
  return (
    <div id="" className="bg-secondary bg-opacity-25 shadow  px-4  py-4 my-3">
      <div class="d-flex flex-wrap justify-content-center">
        <div class="col-md-4">
          <h4 className="redmeeHeading">
            <i
              className={`fa fa-calendar fa-lg text-theame me-2  `}
              aria-hidden="true"
            />
            So lösen Sie einen Gutschein ein.
          </h4>
        </div>
        <div class="col-md-7 w-50">
          <hr style={{ height: "0.5px", backgroundColor: "#717D7E" }} />
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-evenly ">
        {svg.map(({ para }, i) => (
          <div
            className="col-md-12 col-lg m-2  bg-white shadow-lg rounded"
            key={i}
          >
            <div className="  d-flex flex-wrap mx-2 my-2">
              <div className="col-1">
                <i
                  className={`fa fa-circle-arrow-right fa-lg text-theame ml-2`}
                  aria-hidden="true"
                />
              </div>
              <div className="col-11 ps-2">
                <p className="redmeePara">{para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
