export interface IFooterCTA {
  subtitle: string;
  title: string;
  url: string;
  buttonText: string;
}

export interface IFooterLogo {
  src: string;
  url: string;
}

export interface IFooterSocial {
  icon: string;
  url: string;
}

export interface IFooterLink {
  label: string;
  url: string;
}

export interface IFooterWidget {
  title: string;
  links: IFooterLink[];
}

export interface IFooterContact {
  title: string;
  phone: string;
  address: string;
}

export interface IFooterCopyright {
  text: string;
  author: string;
  url: string;
  links: IFooterLink[];
}

export interface IFooterData {
  backgroundImage: string;
  cta: IFooterCTA;
  logo: IFooterLogo;
  description: string;
  socials: IFooterSocial[];
  company: IFooterWidget;
  useful: IFooterWidget;
  contact: IFooterContact;
  copyright: IFooterCopyright;
}

const footerData: IFooterData = {
  backgroundImage: "/images/footer/star.jpg", 
  cta: {
    subtitle: "GET IN TOUCH",
    title: "LET’S CONNECT",
    url: "/contact",
    buttonText: "Contact Us",
  },
  logo: {
    src: "/images/footer/logo.png",
    url: "/",
  },
  description: "We place great emphasis on Students, tutors, and Parents.",
  socials: [
    { icon: "fa-brands fa-facebook-f", url: "#" },
    { icon: "fa-brands fa-twitter", url: "#" },
    { icon: "fa-brands fa-linkedin-in", url: "#" },
  ],
  company: {
    title: "Company",
    links: [
      { label: "Subjects", url: "/subjects-we-offer" },
      { label: "Grades", url: "/grades" },
      { label: "Pricing", url: "/pricing" },
      { label: "Tutors", url: "/tutors" },
      { label: "Blog", url: "/blogs" },
      { label: "Terms & Conditions", url: "/terms-and-conditions" },
      { label: "Privacy Policy", url: "/privacy-policy" },
    ],
  },
  useful: {
    title: "Useful Links",
    links: [
      { label: "Science", url: "/subjects-we-offer/science" },
      { label: "Mathematics", url: "/subjects-we-offer/mathematics" },
      { label: "Economics", url: "/subjects-we-offer/economics" },
      { label: "English", url: "/subjects-we-offer/english" },
    ],
  },
  contact: {
    title: "Contact Us",
    phone: "888 054 7860",
    address: "410 Sandtown,\nCalifornia 56044, USA",
  },
  // Copyright 2026 Eduglobalonline. All rights reserved.
  copyright: {
    text: "© 2026",
    author: "Eduglobalonline",
    url: "/",
    links: [{ label: "Crafted with ‪‪❤︎‬ by Woxro", url: "https://www.woxro.com" }],
  },
};

export default footerData;
