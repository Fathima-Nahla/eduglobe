export interface IProject {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  name: string;
  avatar: string;
  link: string;
}

export interface WorkData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllText: string;
  viewAllLink: string;
  projects: IProject[];
}

const workData: WorkData = {
  sectionSubtitle: "Our Portfolio",
  sectionTitle: "Selected works",
  viewAllText: "See All Works",
  viewAllLink: "/ai-agency/portfolio",
  projects: [
    {
      id: 1,
      title: "Science",
      desc: "Dive into the fascinating world of Physics, Chemistry, and Biology, building a strong foundation through engaging lessons and practical examples.",
      tags: [],
      // tags: ["ELEMENTARY", "HOMEWORK SUPPORT"],
      image: "/images/subjects/Science.jpg",
      avatar: "/images/subjects/author1.jpg",
      name: "Alexander Moorie",
      link: "/science",
    },
    {
      id: 2,
      title: "Mathematics",
      desc: "Master mathematical concepts from basics to advanced levels, enhancing problem-solving, analytical thinking, and real-world application skills. ",
      tags: [],
      image: "/images/subjects/Mathematics.png",
      avatar: "/images/subjects/author2.jpg",
      name: "Alexander Moorie",
      link: "/mathematics",
    },
    {
      id: 3,
      title: "Economics",
      desc: "Gain a deep understanding of economic principles, financial literacy, and analytical skills across AP, IB, and high school-level curricula.",
      tags: [],
      image: "/images/subjects/Economics.png",
      avatar: "/images/subjects/author3.jpg",
      name: "Alexander Moorie",
      link: "/economics",
    },
    {
      id: 4,
      title: "English",
      desc: " Develop strong reading, writing, and comprehension abilities, improving communication and critical thinking for academic success.",
      tags: [],
      image: "/images/subjects/English.png",
      avatar: "/images/subjects/author3.jpg",
      name: "Alexander Moorie",
      link: "/english",
    },
  ],
};

export default workData;
