export interface Blog {
  image: string;
  tag: string;
  date: string;
  title: string;
  link: string;
  alt: string;
  slug: string;
}

export interface BlogData {
  subtitle: string;
  title: string;
  button: {
    text: string;
    iconClass: string;
    href: string;
  };
  blogs: Blog[];
}

const blogData: BlogData = {
  subtitle: "BLOGS & NEWS",
  title: "Insights & Stories",
  button: {
    text: "Explore More",
    iconClass: "fa-solid fa-arrow-right",
    href: "/blogs",
  },
  blogs: [
    {
      image: "/assets/images/blogs/blog1.jpg",
      tag: "Marketing",
      date: "October 3, 2024",
      title: "Why Curiosity Beats Grades: Learn Smarter, Not Harder ",
      link: "/blogs/why-curiosity-beats-grades-learn-smarter-not-harder",
      slug: "why-curiosity-beats-grades-learn-smarter-not-harder",
      alt:"Four women sitting at a table, smiling and raising their arms in celebration or excitement.",
    },
    {
      image: "/assets/images/blogs/blog2.jpg",
      tag: "Branding",
      date: "October 3, 2024",
      title: "Turn Screen Time into Learning: Easy Daily Habits",
      link: "/blogs/turn-screen-time-into-learning-easy-daily-habits",
      slug: "turn-screen-time-into-learning-easy-daily-habits",
      alt:"Team members focused on tasks at a desk in a contemporary office space.",
    },
    {
      image: "/assets/images/blogs/blog3.jpg",
      tag: "Design",
      date: "October 3, 2024",
      title: "Learn Like a Pro: 5 Micro-Lessons That Stick ",
      link: "/blogs/learn-like-a-pro-5-micro-lessons-that-stick",
      slug: "learn-like-a-pro-5-micro-lessons-that-stick ",
      alt:"A woman wearing headphones is focused on her laptop, engaged in work or a virtual meeting.",
    },
  ],
};

export default blogData;
