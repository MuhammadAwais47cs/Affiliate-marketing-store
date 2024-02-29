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
    heading: "Privacy Policy  ",
    para: (
      <div>
        {" "}
        This Privacy Policy outlines how {madcoupon} collects, uses, maintains,
        and discloses information gathered from users of the {madcoupon}{" "}
        website.
      </div>
    ),
  },
  {
    id: 2,
    heading: "Information We Collect ",
    para: (
      <div>
        We collect various types of information to enhance your experience and
        provide you with the best services. This may include, but is not limited
        to,
        <br />
        Personal identification information (such as name, email address)
        provided voluntarily by Users,
        <br />
        Non-personal identification information, such as browser type, device
        information, and other technical details when Users interact with our
        Website.,
      </div>
    ),
  },
  {
    id: 3,
    heading: "How We Use Information",
    para: (
      <div>
        {madcoupon}
        may collect and use Users' personal information for the following
        purposes:
        <br />
        <br />
        To improve customer service: Information provided helps us respond to
        your customer service requests more efficiently.
        <br />
        To personalize the user experience: We may use information in the
        aggregate to understand how our Users as a group use the services and
        resources provided on our Website.
        <br />
        To send periodic emails: We may use the email address to respond to
        inquiries, questions, and/or other requests.
      </div>
    ),
  },
  {
    id: 4,
    heading: "Sharing Your Personal Information",
    para: `We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.`,
  },
  {
    id: 5,
    heading: "Third-Party Links",
    para: (
      <div>
        {madcoupon} may contain links to third-party websites. These sites have
        their own privacy policies, and we are not responsible for the content
        or practices of these linked sites. Nonetheless, we seek to protect the
        integrity of our site and welcome any feedback about these sites.
      </div>
    ),
  },
  {
    id: 6,
    heading: "Security Measures",
    para: `
    We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and data stored on our Website.

             `,
  },
  {
    id: 7,
    heading: "Changes to this Privacy Policy",
    para: (
      <div>
        {madcoupon} has the discretion to update this Privacy Policy at any
        time. We encourage Users to frequently check this page for any changes
        to stay informed. You acknowledge and agree that it is your
        responsibility to review this Privacy Policy periodically and become
        aware of modifications.
      </div>
    ),
  },

  {
    id: 7,
    heading: "Your Acceptance of these Terms",
    para: (
      <div>
        By using this Website, you signify your acceptance of this Privacy
        Policy. If you do not agree to this policy, please do not use our
        Website.
        <br />
        If you have any questions about this Privacy Policy, please contact us
        at
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
