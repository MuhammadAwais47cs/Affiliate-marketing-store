import React from "react";

const madcoupon = (
  <>
    <span className="fw-bold text-dark"> Madcoupon.de </span>
  </>
);
const handleGmailClick = (email) => {
  // Redirect to the Gmail login page
  // window.location.href = 'https://mail.google.com/mail/u/0/#inbox?compose=new';
  window.open(
    `https://mail.google.com/mail/u/0/#inbox?compose=new&to=${"Madcoupon01@gmail.com"}`,
    "_blank"
  );
};

export const contentData = [
  {
    id: 1,
    heading: "Datenschutzrichtlinie  ",
    para: (
      <div>
        {" "}
        Diese Datenschutzrichtlinie beschreibt, wie {madcoupon} sammelt,
        verwendet, verwaltet, und, und gibt Informationen an, die von Nutzern
        des {madcoupon} {""} gesammelt wurden Webseite.
      </div>
    ),
  },
  {
    id: 2,
    heading: "Informationen, die wir sammeln ",
    para: (
      <div>
        Wir sammeln verschiedene Arten von Informationen, um Ihre Erfahrungen zu
        verbessern und Bieten Sie Ihnen die besten Dienstleistungen.Dies kann
        beinhalten, aber nicht begrenzt ist Zu,
        <br />
        Persönliche Identifizierungsinformationen (z. B. Name, E -Mail -Adresse)
        freiwillig von Benutzern bereitgestellt,
        <br />
        Nicht-persönliche Identifizierungsinformationen wie Browsertyp, Gerät
        Informationen und andere technische Details, wenn Benutzer mit unserer
        interagieren Webseite.,
      </div>
    ),
  },
  {
    id: 3,
    heading: "Wie wir Informationen verwenden",
    para: (
      <div>
        {madcoupon}
        kann die persönlichen Daten der Benutzer für die folgenden sammeln und
        verwenden Zwecke:
        <br />
        <br />
        Um den Kundendienst zu verbessern: Die bereitgestellten Informationen
        helfen uns, auf zu reagieren auf Ihr Kundendienst fordert effizienter.
        <br />
        Um die Benutzererfahrung zu personalisieren: Wir können Informationen in
        der verwenden Aggregation zu verstehen, wie unsere Benutzer als Gruppe
        die Dienste nutzen und Ressourcen auf unserer Website bereitgestellt.
        <br />
        Um periodische E -Mails zu senden: Wir können die E -Mail -Adresse
        verwenden, um darauf zu antworten Anfragen, Fragen und/oder andere
        Anfragen.
      </div>
    ),
  },
  {
    id: 4,
    heading: "Teilen Sie Ihre persönlichen Daten weiter",
    para: `Wir verkaufen, handeln oder vermieten die persönlichen Identifizierungsinformationen der Benutzer nicht an andere.Wir können generische aggregierte demografische Informationen teilen, die nicht mit Informationen zu persönlichen Identifizierungsinformationen zu Besuchern und Benutzern mit unseren Geschäftspartnern verknüpft sind, trusted affiliates, and advertisers.`,
  },
  {
    id: 5,
    heading: "linksVonDrittanbietern",
    para: (
      <div>
        {madcoupon} Kann Links zu Websites von Drittanbietern enthalten.Diese
        Websites haben ihre eigenen Datenschutzrichtlinien, und wir sind nicht
        für den Inhalt verantwortlich oder Praktiken dieser verknüpften
        Websites.Trotzdem versuchen wir, die zu schützen Integrität unserer
        Website und begrüßen Sie alle Feedback zu diesen Websites.
      </div>
    ),
  },
  {
    id: 6,
    heading: "Sicherheitsmaßnahmen",
    para: `
   Wir verwenden geeignete Datenerfassung, Speicher- und Verarbeitungs- und Sicherheitsmaßnahmen, um vor nicht autorisierten Zugriff, Änderung, Offenlegung oder Zerstörung Ihrer auf unserer Website gespeicherten persönlichen Daten und Daten zu schützen.
             `,
  },
  {
    id: 7,
    heading: "Änderungen an dieser Datenschutzrichtlinie",
    para: (
      <div>
        {madcoupon} hat den Ermessen Zeit.Wir ermutigen Benutzer, diese Seite
        häufig auf Änderungen zu überprüfen auf dem Laufenden bleiben.Sie
        erkennen an und stimmen zu, dass es Ihr ist Verantwortung, diese
        Datenschutzrichtlinie regelmäßig zu überprüfen und zu werden
        Veränderungen bewusst.
      </div>
    ),
  },

  {
    id: 7,
    heading: "Ihre Akzeptanz dieser Begriffe",
    para: (
      <div>
        Durch die Nutzung dieser Website bedeuten Sie Ihre Akzeptanz dieser
        Privatsphäre Politik.Wenn Sie dieser Richtlinie nicht zustimmen,
        verwenden Sie unsere bitte nicht unsere Webseite.
        <br />
        Wenn Sie Fragen zu diesen Datenschutzrichtlinien haben, kontaktieren Sie
        uns bitte bei
        <span
          className="text-dark fw-bold pointer pe-auto"
          onClick={handleGmailClick}
        >
          {" "}
          Madcoupon01@gmail.com{" "}
        </span>
      </div>
    ),
  },
];
