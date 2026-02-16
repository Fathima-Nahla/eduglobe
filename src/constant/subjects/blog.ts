export interface Blog {
  image: string;
  tag: string;
  date: string;
  title: string;
  link: string;
  alt: string;
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
    href: "/ai-agency/blog",
  },
  blogs: [
    {
      image: "/assets/images/blogs/blog1.jpg",
      tag: "Marketing",
      date: "October 3, 2024",
      title: "How AI is Shaping the Future of Brand Strategy",
      link: "/ai-agency/blog-details",
      alt:"Four women sitting at a table, smiling and raising their arms in celebration or excitement.",
    },
    {
      image: "/assets/images/blogs/blog2.jpg",
      tag: "Branding",
      date: "October 3, 2024",
      title: "Why Every Brand Needs an AI Strategy",
      link: "/ai-agency/blog-details",
      alt:"Team members focused on tasks at a desk in a contemporary office space.",
    },
    {
      image: "/assets/images/blogs/blog3.jpg",
      tag: "Design",
      date: "October 3, 2024",
      title: "How AI Helps Brands Stay Ahead in Competitive Markets",
      link: "/ai-agency/blog-details",
      alt:"A woman wearing headphones is focused on her laptop, engaged in work or a virtual meeting.",
    },
  ],
};

export default blogData;
