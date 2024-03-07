import React from "react";
// import banner01 from "../Asset/4.png";
// import banner02 from "../Asset/5.png";
import "./AboutUs.css";
function AboutUs() {
  // const whyChooseUs = [
  //   {
  //     heading: "Best Price",
  //     para: "Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.",
  //   },
  //   {
  //     heading: "Trusted By Thousands",
  //     para: "NUMBER 1 PROVIDER OF THE GRIPPING DRIVING EXPERIENCES.",
  //   },
  //   {
  //     heading: "Wide Range of Brands",
  //     para: "We Have A Wide Range Of Different Car Brands.",
  //   },
  // ];
  return (
    <>
      <section className="bg-light ">
        {/*   <div className="d-flex flex-row  align-items-center bg-danger-subtle py-4 ">
          <div className="col-md-6 ps-5  ">
            <h1 className="text-start  text-danger">AboutUs</h1>
          </div>
          <div className="col-md-6 pe-5">
           <p className="text-end ">Home / AboutUs</p>
          </div>
        </div>  */}
        <div className="py-1 "></div>

        <div className="d-flex flex-row justify-content-center container ">
          {/* <div className="col-md-6 mt-5">
            <div className="bannerImg">
              <img src={banner01} alt="" />
            </div>
          </div> */}
          <div className="col-md-11 pe-md-3">
            {/* <h2 className="py-5">Who we are</h2> */}
            <p className="text-secondary pe-md-5 me-lg-5">
              Willkommen zu{" "}
              <span className="text-dark fw-bold">Madcoupon.de </span> - Dein
              Ultimate Ziel für kostenlose Gutscheine und Gutscheine in
              Deutschland!
              <br />
              <br />
              Entdecken Sie eine Welt der Ersparnisse bei {""}
              <span className="text-dark fw-bold">Madcoupon.de </span>, dein
              Quelle für exklusive kostenlose Gutscheine und
              Gutscheincodes.Entfesseln Die Kraft der Rabatte und genießen Sie
              unglaubliche Einsparungen bei Ihrem Lieblingsmarken, ohne einen
              Cent auszugeben!
              <br />
              <br />
              <span className="text-dark fw-bold"> Warum </span>
              <span className="text-dark fw-bold">Madcoupon.de </span> ?
              <br />
              Bei
              <span className="text-dark fw-bold"> Madcoupon.de </span> , Wir
              Glauben Sie, dass das Sparen von Geld problemlos sein
              sollte.Deshalb wir Bieten Sie eine große Auswahl an kostenlosen
              Gutscheinen und Gutscheincodes an auf den deutschen Markt
              zugeschnitten.Verabschieden Sie sich von Registrierungsformularen
              und versteckte Gebühren - unsere Angebote sind wirklich kostenlos
              für Sie zu greifen und sofort benutzen!
              <br />
              <br />
              <span className="text-dark fw-bold">Was unterscheidet uns:</span>
              <br />
              Umfangreiche Auswahl: Erforschen Sie eine Vielzahl von
              Gutscheinen, die abdecken Alles von Mode und Elektronik bis hin zu
              Reisen und Essen. Wir haben Ihre Lieblingsmarken abgedeckt!
              <br />
              <br />
              <span className="text-dark fw-bold">
                Benutzerfreundliche Erfahrung:
              </span>
              Unsere Website ist im Sinn.Einfach durch die navigieren Kategorien
              und finden Sie die besten Angebote mit nur wenigen Klicks.
              <br />
              <br />
              <span className="text-dark fw-bold">
                Keine Registrierung erforderlich:
              </span>
              Genießen Sie die Freiheit, auf alle unsere Gutscheine zuzugreifen,
              ohne welche Obligatorische Anmeldungen.Greifen Sie sofort auf die
              Ersparnisse zu, die Sie verdienen.
              <br />
              <br />
              <span className="text-dark fw-bold">Regelmäßige Updates:</span>
              Wir halten unseren Finger am Puls der neuesten Angebote.Besuchen
              Madcoupon.de regelmäßig, um über frische, aufregende Angebote auf
              dem Laufenden zu bleiben.
              <br />
              <br />
              <span className="text-dark fw-bold">Wie es funktioniert:</span>
              <br />
              <br />
              <span className="text-dark fw-bold"> Durchsuche:</span>
              Erforschen Sie unsere Kategorien oder verwenden Sie unsere
              Suchfunktion, um die zu finden Perfekter Gutschein für Ihre
              Bedürfnisse
              <br />
              <br />
              <span className="text-dark fw-bold">Greifen:</span>
              Klicken Sie einfach auf den gewünschten Gutschein und es gehört
              Ihnen!Keine Saiten beigefügt.
              <br />
              <br />
              <span className="text-dark fw-bold"> Speichern:</span>
              Lösen Sie Ihren Gutschein im jeweiligen Geschäft oder der
              jeweiligen Website und genießen Sie es die Ersparnisse.So einfach
              ist das!
              <br />
              <br />
              Beginnen Sie noch heute Ihre Sparreise mit
              <span className="text-dark fw-bold"> Madcoupon.de </span> –Wo
              Jeder Gutschein ist ein Schritt in Richtung intelligenterer und
              wirtschaftlicherer Einkaufsmöglichkeiten! Viel Spaß beim
              Speichern!
            </p>
          </div>
        </div>
        {/* 
        <div className="d-flex flex-row justify-content-center py-2 con container ">
           <div className="col-md-11 pe-md-3">
          <div className="col-md-11 pe-md-3">
            <h2 className="py-5">Our Mission</h2>
            <p className="text-secondary pe-md-5 me-lg-5">
              Our mission as Shopping Mall is to provide consumers with the most
              accurate and up-to-date information on the prices of products and
              services from various retailers and suppliers. We strive to make
              the process of finding the best deals and discounts as easy and
              convenient as possible, saving our users time and money. We are
              committed to providing unbiased and transparent information, and
              we strive to be the go-to resource for consumers looking to make
              informed purchasing decisions.
            </p>
          </div>
        <div className="col-md-6 mt-5">
            <div className="bannerImg2">
              <img src={banner02} alt="" />
            </div>
        </div>
          </div> 

        <div className="bg-danger-subtle py-2 ">
          <h1 className="text-center pt-5  text-danger">Why Choose Us?</h1>
          <div className="d-flex flex-row justify-content-center align-items-center  container">
            {whyChooseUs.map(({ heading, para }) => (
              <div className="col-md-3" key={para}>
                <h4 className="">{heading}</h4>
                <p className="text-secondary pe-3">{para}</p>
              </div>
            ))}
          </div>
        </div> 
        <div className="d-flex flex-row justify-content-center py-2 con container ">
          <div className="col-md-11 pe-md-3">
            <h2 className="py-5">Our Vission</h2>
            <p className="text-secondary pe-md-5 me-lg-5">
              Our vision for a Shopping Mall is to create a user-friendly
              platform that allows consumers to easily compare prices and
              features of products and services from various retailers and
              providers. Our goal is to empower consumers with the information
              they need to make informed purchasing decisions and save money. We
              will strive to provide accurate and up-to-date pricing
              information, as well as detailed product information, reviews, and
              ratings. Additionally, we will work to create a seamless and
              efficient user experience, with features such as price alerts,
              price history charts, and personalized product recommendations.
              Ultimately, our vision is to be the go-to destination for
              consumers looking to save money and make informed purchasing
              decisions.
            </p>
          </div>
        <div className="col-md-6 mt-5">
            <div className="px-5"></div>
          </div>
        </div>
           */}
      </section>
    </>
  );
}

export default AboutUs;
