export interface IBrand {
  image: string;
}

export interface HeroData {
  bgImage: string;
  shape1: string;
  shape2: string;
  titleSpanOne: string;
  titleText: string;
  titleSpanTwo: string;
  subtitle: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  brandTitle: string;
  brands: IBrand[];
}

const heroData: HeroData = {
    bgImage: "/assets/imgs/shape/shape-22.webp",
    shape1: "/assets/imgs/shape/shape-20.webp",
    shape2: "/assets/imgs/shape/shape-21.webp",
    titleSpanOne: "Tutoring",
    titleText: "for Every Subject, Every Grade, Every",
    titleSpanTwo: "Student",
    subtitle: "Personalized, expert-led online tutoring to help every learner reach their full potential anytime, anywhere.",
    primaryBtnText: "Book a Session Now",
    primaryBtnLink: "/contact",
    secondaryBtnText: "Contact Us",
    secondaryBtnLink: "/ai-agency/contact",
    brandTitle: "300+ Trusted Clients Over Worldwide",
    brands: [
      { image: "/assets/images/home/logo.svg" },
      { image: "/assets/images/home/logo1.svg" },
      { image: "/assets/images/home/logo2.svg" },
      { image: "/assets/images/home/logo3.svg" },
      
    ],
  };  
  
  export default heroData;