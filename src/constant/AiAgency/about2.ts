export interface AboutTwoData {
  thumb1: {
    shape1: string;
    image: string;
    alt1: string;
    alt2: string;
  };
  thumb2: {
    logo: string;
    logoAlt: string;
    icon: string;
    iconAlt: string;
    text: string;
    videoLink: string;
  };
  thumb3: {
    brandText: string;
    image: string;
    alt: string;
  };
}

const aboutTwoContent: AboutTwoData = {
  thumb1: {
    shape1: "/assets/imgs/shape/shape-50.webp",
    image: "/assets/images/about2section/shape1.jpg",
    alt1: "Decorative shape",
    alt2: "AI Illustration",
  },
  thumb2: {
    logo: "",
    logoAlt: "",
    icon: "/assets/imgs/icon/icon-27.webp",
    iconAlt: "Play icon",
    text: "Play intro video",
    videoLink: "/videos/intro_video.mp4",
  },
  thumb3: {
    brandText: "EDUGLOBAL",
    image: "/assets/images/about2section/shape2.jpg",
    alt: "Background Shape",
  },
};
export default aboutTwoContent;
