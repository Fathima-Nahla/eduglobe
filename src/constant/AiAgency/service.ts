export interface ServiceSectionData {
  subtitle: string;
  title: string;
  exploreLink: string;
}

export interface Service {
  id: string;
  title: string;
  projectsAvailable: string;
  projectsDone: string;
  image: string;
  description: string;
  detailLink: string;
}

export const serviceSectionData: ServiceSectionData = {
  subtitle: "OUR COURSES",
  title: "Learning Made Easy",
  exploreLink: "/subjects-we-offer",
};

export const servicesData: Service[] = [
  {
    id: "data-analytics",
    title: "AP Economics - Micro",
    projectsAvailable: "By Alexandra Moore",
    projectsDone: "By Alexandra Moore",
    image: "/assets/images/service/service.jpg",
    description:
      "Explore the fundamentals of Microeconomics, understanding individual markets, consumer behavior, and decision-making processes through practical examples and analytical exercises. ",
    detailLink: "/economics",
  },
  {
    id: "chatbots",
    title: "AP Economics - Macro",
    projectsAvailable: "By Ethan Brooklyn",
    projectsDone: "By Ethan Brooklyn",
    image: "/assets/images/service/service1.jpg",
    description:
      " Dive into Macro Economics concepts, examining national economies, fiscal and monetary policies, and global economic trends to develop strong analytical and problem-solving skills. ",
    detailLink: "/economics",
  },
  {
    id: "predictive-modeling",
    title: "Biology",
    projectsAvailable: "By Jordan Williams",
    projectsDone: "By Jordan Williams",
    image: "/assets/images/service/service2.jpg",
    description:
      "Discover the laws of nature through Physics, covering mechanics, thermodynamics, electricity, and more, with engaging experiments and real-world applications to strengthen conceptual understanding. ",
    detailLink: "/science",
  },
  {
    id: "ux-ui",
    title: "Chemistry",
    projectsAvailable: "By Emily Rodriguez",
    projectsDone: "By Emily Rodriguez",
    image: "/assets/images/service/service3.jpg",
    description:
      " Uncover the principles of Chemistry, from atomic structure to chemical reactions, enhancing analytical thinking and laboratory skills through hands-on examples and practical exercises. ",
    detailLink: "/science",
  },
];
