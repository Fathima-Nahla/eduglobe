export interface IBlog {
  id: number;
  image: string;
  tag: string;
  title: string;
  url: string;
  readTime: string;
  date: string;
  slug: string;
}

export interface IBlogCTA {
  url: string;
  text: string;
}

export interface BlogData {
  subtitle: string;
  title: string;
  cta: IBlogCTA;
  blogs: IBlog[];
}

const blogData: BlogData = {
  subtitle: "Latest Insights",
  title: "Our Blogs & News",
  cta: {
    url: "/marketing-agency/blog",
    text: "Explore All",
  },
  blogs: [
    {
      id: 1,
      image: "/assets/images/blogs/blog1.jpg",
      tag: "News",
      title: "Why Curiosity Beats Grades: Learn Smarter, Not Harder",
      url: "/blogs/why-curiosity-beats-grades-learn-smarter-not-harder",
      slug: "why-curiosity-beats-grades-learn-smarter-not-harder",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 2,
      image: "/assets/images/bloggrid/blog-grid5.jpg",
      tag: "News",
      title: "Leveraging data from Averto marketing success",
      url: "/blogs/leveragin-data-from-averto-marketing-success",
      slug: "leveragin-data-from-averto-marketing-success",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 3,
      image: "/assets/images/bloggrid/blog-grid6.jpg",
      tag: "News",
      title: "The role of analytics market research",
      url: "/blogs/the-role-of-analytics-market-research",
      slug: "the-role-of-analytics-market-research",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 4,
      image: "/assets/images/blogs/blog2.jpg",
      tag: "News",
      title: "Turn Screen Time into Learning: Easy Daily Habits",
      url: "/blogs/turn-screen-time-into-learning-easy-daily-habits",
      slug: "turn-screen-time-into-learning-easy-daily-habits",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 5,
      image: "/assets/images/bloggrid/blog-grid7.jpg",
      tag: "News",
      title: "Leveraging data from Averto marketing success",
      url: "/blogs/turn-screen-time-into-learning-easy-daily-habits",
      slug: "the-benefits-of-influencer-marketing",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 6,
      image: "/assets/images/bloggrid/blog-grid8.jpg",
      tag: "News",
      title: "The role of analytics market research",
      url: "/blogs/turn-screen-time-into-learning-easy-daily-habits",
      slug: "the-benefits-of-influencer-marketing",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 7,
      image: "/assets/images/blogs/blog3.jpg",
      tag: "News",
      title: "Learn Like a Pro: 5 Micro-Lessons That Stick",
      url: "/blogs/learn-like-a-pro-5-micro-lessons-that-stick",
      slug: "learn-like-a-pro-5-micro-lessons-that-stick",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 8,
      image: "/assets/images/bloggrid/blog-grid9.jpg",
      tag: "News",
      title: "Leveraging data from Averto marketing success",
      url: "/blogs/turn-screen-time-into-learning-easy-daily-habits",
      slug: "the-benefits-of-influencer-marketing",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 9,
      image: "/assets/images/bloggrid/blog-grid10.jpg",
      tag: "News",
      title: "The role of analytics market research",
      url: "/blogs/turn-screen-time-into-learning-easy-daily-habits",
      slug: "the-benefits-of-influencer-marketing",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
   
   
  ],
};

export default blogData;
