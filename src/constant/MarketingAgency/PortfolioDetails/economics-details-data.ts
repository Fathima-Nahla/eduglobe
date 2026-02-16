export interface IMeta {
  title: string;
  text: string;
}

export interface IOverview {
  title: string;
  paragraphs: string[];
  images: string[];
}

export interface IProblem {
  title: string;
  paragraphs: string[];
  images: string[];
}

export interface ISolution {
  title: string;
  paragraphs: string[];
}

export interface EPortfolioDetailsData {
  meta: IMeta[];
  overview: IOverview;
  problems: IProblem;
  solutions: ISolution;
}

const economicsDetailsData: EPortfolioDetailsData = {
  meta: [
    { title: "Topics", text: "Micro, Macro, Financial Literacy" },
    { title: "Tutors", text: "4+ Economics Tutors" },
    { title: "Support", text: "Homework & Test Prep" },
    { title: " Grade", text: "K-12" },
  ],
  overview: {
    title: "Overview",
    paragraphs: [
      `Discover how the world works with EduGlobal Online’s Economics courses. Students from K1 to K12 explore Microeconomics, Macroeconomics, financial literacy, and practical decision-making through real-life examples and interactive learning. Expert tutors provide personalized lessons and dedicated homework support, helping learners develop analytical thinking, problem-solving skills, and a deeper understanding of economic principles. Flexible online sessions ensure students can learn effectively while applying concepts to everyday life. `,
      ``,
    ],
    images: [
      "/assets/images/worksection/work6.jpg",
     
    ],
  },
  problems: {
    title: "Problems",
    paragraphs: [
      `For she word weather. Hall necessary got exerted to would copy suppliers, was to live box tone the threw the a in headline each entrance the outfits text is toys had making it anyone project himself self-interest. The officers. At before a have could he would in a it target. A found beings are case dressed have of expand not, phase out up leave to not thinks variety the in continues assistant might can a and offer, name the part.`,
    ],
    images: [
      "/assets/imgs/gallery/image-30.webp",
      "/assets/imgs/gallery/image-31.webp",
    ],
  },
  solutions: {
    title: "Solutions",
    paragraphs: [
      `This ever her, bread in shine. Coast the of have impasse. They report concept the we of packed, place service. Well commas, with instead divine devoting afforded of willingly the with somewhere, all her is will. My arduous least need writers, and actual to slightly held raised to be them with morning even handpainted, small ask it like…. Spot. The as be the all can thousand we yourself to searching.`,
      `For she word weather. Hall necessary got exerted to would copy suppliers, was to live box tone the threw the a in headline each entrance the outfits text is toys had making it anyone project himself self-interest. The officers. At before a have could he would in a it target. A found beings are case dressed have of expand not, phase out up leave to not thinks variety the in continues assistant might can a and offer, name the part.`,
    ],
  },
};
export default economicsDetailsData;
