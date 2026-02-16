export interface WorkSectionContent {
  subtitle: string;
  title: string;
  completedProjects: string;
  projectsText: string;
  exploreLink: string;
}

export interface PortfolioItem {
  title: string;
  tags: string[];
  image: string;
  link: string;
  alt: string;
}

export const workSectionContent: WorkSectionContent = {
  subtitle: "SUBJECTS WE OFFER",
  title: "Learning Made Simple",
  completedProjects: "10+",
  projectsText: "Featured Subjects",
  exploreLink: "/subjects-we-offer",
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Economics",
    tags: ["Alexander Moorie"],
    image: "/assets/images/worksection/work1.jpg",
    alt: "A child interacts with a laptop, holding a onion, showcasing a blend of technology and creativity.",
    link: "/economics",
  },
  {
    title: "Science",
    tags: ["Adam Jon"],
    image: "/assets/images/worksection/work2.jpg",
    alt: "A woman and a boy are at a table, both looking at a laptop, sharing a moment of learning or activity.",
    link: "/science",
  },
  {
    title: "English",
    tags: ["Angel John"],
    image: "/assets/images/worksection/work3.jpg",
    alt: "A woman seated at a desk, working on a laptop with a notebook open beside her.",
    link: "/english",
  },
  {
    title: "Math",
    tags: ["Alan Josh"],
    image: "/assets/images/worksection/work4.jpg",
    alt: "A woman seated at a desk, working on a laptop with a pen in hand, focused on her task.",
    link: "/mathematics",
  },
  
 
];