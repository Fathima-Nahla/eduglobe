export interface ISocialLink {
  icon: string;
  url: string;
}

export interface IAuthorInfo {
  name: string;
  designation: string;
  image: string;
  text: string;
  socialLinks: ISocialLink[];
}

export interface IRecentBlog {
  title: string;
  date: string;
  image: string;
  url: string;
}

export interface IBlogSidebar {
  author: IAuthorInfo;
  recentBlogs: IRecentBlog[];
  popularTags: string[];
}

export interface BlogSection {
  title: string;
  content: string[];
  gallery?: string[];
  quote?: {
    text: string;
    author: string;
  };
}

export interface BlogData {
  title: string;
  date: string;
  commentsCount: number;
  category: string;
  introText: string;
  coverImage: string;
  sections: BlogSection[];
  tags: string[];
  sidebar: IBlogSidebar; // <-- new field for dynamic sidebar
}


// Keep the same name, but use slug mapping for multiple blogs
export const blogSingleData: { [slug: string]: BlogData } = {
  
"why-curiosity-beats-grades-learn-smarter-not-harder": {
    title: "Why Curiosity Beats Grades: Learn Smarter, Not Harder ",
    date: "March 5, 2025",
    commentsCount: 2,
    category: "",
    introText: "Ever sat in class memorizing facts and felt your brain just… switch off? You’re not alone. What if there was a way to learn that’s fun, exciting, and actually sticks? That secret is curiosity.",
    coverImage: "/assets/images/blogs/blog1.jpg",
    sections: [
      {
        title: "Curiosity in Action: ",
        content: [
          "Ask “Why?” - Instead of just memorizing answers, ask why things happen. Wonder why the sky changes color, why plants grow toward sunlight, or how your favorite video game works? Questions spark your brain to explore. ",
          "Try It Yourself - Curious about science, art, or coding? Do a small experiment, draw your ideas, or build a mini project. Learning by doing makes it unforgettable. ",
          "Follow Your Interests - Love space, animals, or sports? Start there! Your brain pays more attention when you care, which helps you remember better. "
        ],
        // gallery: ["/assets/imgs/gallery/image-24.webp", "/assets/imgs/gallery/image-25.webp"],
      },
      {
        title: "Why Grades Aren’t Everything: ",
        content: [
          " Grades measure what you remember at a specific time. Curiosity helps you understand deeply, connect ideas, and solve problems creatively. Skills like asking smart questions and exploring ideas last longer than memorization. ",
          
        ],
        // quote: {
        //   text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime place at facere possimus!",
        //   author: "Sarah Thompson",
        // },
      },
      {
        title: "Mini Challenge for Students:",
        content: [
          "Pick one thing you’re curious about today. Ask three “why” questions and try to find the answers. Draw a quick doodle or write one line about what you learned. Share it with a friend, sibling, or parent-it makes curiosity even more fun! ",
          
        ],
      },
      {
        title: "Takeaway:",
        content: [
          "Curiosity is your learning superpower. Let it guide you, and grades will follow naturally. Learning becomes exciting, meaningful, and something you look forward to every day. ",
          
        ],
      },
    ],
    tags: ["Branding", "Design", "Corporate"],
    sidebar: {
      author: {
        name: "Ahmed Al-Badr",
        designation: "Marketing Specialist",
        image: "/assets/imgs/gallery/image-24.webp",
        text: "Ahmed specializes in digital marketing strategies...",
        socialLinks: [
          { icon: "fa-facebook-f", url: "#" },
          { icon: "fa-twitter", url: "#" },
          { icon: "fa-linkedin-in", url: "#" },
        ],
      },
      recentBlogs: [
        { title: "Global branding impact", date: "Feb 12, 2025", image: "/assets/imgs/blog/blog-22.webp", url: "/ai-agency/blog/leveragin-data-from-averto-marketing-success" },
        { title: "Design Trends 2025", date: "Apr 2, 2025", image: "/assets/imgs/blog/blog-24.webp", url: "/ai-agency/blog/design-trends-2025" },
      ],
      popularTags: ["Marketing", "Influencer", "Social Media", "Strategy"],
    },
  },

  "turn-screen-time-into-learning-easy-daily-habits": {
    title: "Turn Screen Time into Learning: Easy Daily Habits",
    date: "March 5, 2025",
    commentsCount: 2,
    category: "",
    introText: "Scrolling TikTok or YouTube again? Don’t panic. Your screen time doesn’t have to be wasted-it can become your learning playground. All it takes is a few smart habits. ",
    coverImage: "/assets/images/blogs/blog2.jpg",
    sections: [
      {
        title: "Why Screens Can Help: ",
        content: [
          "Screens can teach concepts faster than traditional methods-if used wisely. Short videos, interactive apps, and online games keep your brain alert and curious. ",
          
        ],
        // gallery: ["/assets/imgs/gallery/image-24.webp", "/assets/imgs/gallery/image-25.webp"],
      },
      {
        title: "Tips for Turning Screens into Learning:  ",
        content: [
          " Learning becomes more enjoyable and effective when done in short, focused bursts. Watching a quick educational video, answering a mini-quiz, or reading an interesting fact keeps your mind engaged and makes it easier to retain information. Educational apps and games also make tricky subjects like math or science feel more like fun challenges, turning learning into an exciting experience rather than a task. ",
          "After watching a video or completing an activity, try drawing a diagram, explaining the concept to someone, or even doing a small experiment. This kind of active learning helps ideas stick much better than simply scrolling or passively watching. It’s also important to avoid sitting for long hours-study in short sprints of about 5-10 minutes, followed by tiny breaks. These mini learning sessions help maintain your focus, energy, and enthusiasm."
        ],
        // quote: {
        //   text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime place at facere possimus!",
        //   author: "Sarah Thompson",
        // },
      },
      {
        title: "Mini Challenge for Students:",
        content: [
          "Pick one educational video or app today. Afterward, write one line or draw a quick sketch about what you learned. Keep it under 3 minutes-short, fun, and effective!  ",
          
        ],
      },
      {
        title: "Takeaway:",
        content: [
          "Screen time doesn’t have to be wasted. With smart habits, your favorite devices can make learning fast, fun, and unforgettable. ",
          
        ],
      },
    ],
    tags: ["Branding", "Design", "Corporate"],
    sidebar: {
      author: {
        name: "Ahmed Al-Badr",
        designation: "Marketing Specialist",
        image: "/assets/imgs/gallery/image-24.webp",
        text: "Ahmed specializes in digital marketing strategies...",
        socialLinks: [
          { icon: "fa-facebook-f", url: "#" },
          { icon: "fa-twitter", url: "#" },
          { icon: "fa-linkedin-in", url: "#" },
        ],
      },
      recentBlogs: [
        { title: "Global branding impact", date: "Feb 12, 2025", image: "/assets/imgs/blog/blog-22.webp", url: "/ai-agency/blog/leveragin-data-from-averto-marketing-success" },
        { title: "Design Trends 2025", date: "Apr 2, 2025", image: "/assets/imgs/blog/blog-24.webp", url: "/ai-agency/blog/design-trends-2025" },
      ],
      popularTags: ["Marketing", "Influencer", "Social Media", "Strategy"],
    },
  },

  "learn-like-a-pro-5-micro-lessons-that-stick": {
    title: "Learn Like a Pro: 5 Micro-Lessons That Stick",
    date: "March 5, 2025",
    commentsCount: 2,
    category: "",
    introText: "Who says learning needs hours of sitting still? Micro-lessons-short, focused bursts-help you learn more, faster, and without stress. Here’s how to become a micro-lesson master. ",
    coverImage: "/assets/images/blogs/blog3.jpg",
    sections: [
      {
        title: "The 5 Micro-Lessons: ",
        content: [
          "Learning can be quick, fun, and effective when you turn it into short, engaging activities. For math, try “Math in 5”-solve three quick puzzles or play counting games and mini quizzes to sharpen your brain. When it comes to science, a “Science Snap” session can make a big difference. Watch a short two-minute experiment online or try one at home, then observe and explain what you learned-active participation helps the lesson stick.",
          "If you love words, “Word Wizardry” is a great way to expand your vocabulary. Learn three new words each day and use them in your own sentences or short stories. When you connect new words with creativity, they become easier to remember. For a quick understanding of money and markets, try “Economics in a Minute.” Choose a simple concept like supply and demand or saving versus spending, and sketch a small doodle or chart-visuals make abstract ideas more concrete. Finally, take on a “Creative Challenge.” Write a micro-story, doodle a comic, or build a tiny project. These creative exercises not only make learning enjoyable but also strengthen your memory and problem-solving skills."
        ],
        // gallery: ["/assets/imgs/gallery/image-24.webp", "/assets/imgs/gallery/image-25.webp"],
      },
      {
        title: "Why Micro-Lessons Work: ",
        content: [
          "Short attention spans need quick wins. Micro-lessons follow a simple cycle: focus → learn something small → reward yourself → repeat. It keeps learning fun and effective. ",
           
        ],
        // quote: {
        //   text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime place at facere possimus!",
        //   author: "Sarah Thompson",
        // },
      },
      {
        title: "Mini Challenge for Students:",
        content: [
          "Pick one micro-lesson today. Time yourself for 5 minutes. Reward yourself after completing it-it reinforces good habits and makes learning feel like a game.  ",
          
        ],
      },
      {
        title: "Takeaway:",
        content: [
          "Big learning doesn’t mean long hours. Small, consistent bursts-micro-lessons-help you learn like a pro, stay motivated, and have fun every day. ",
          
        ],
      },
    ],
    tags: ["Branding", "Design", "Corporate"],
    sidebar: {
      author: {
        name: "Ahmed Al-Badr",
        designation: "Marketing Specialist",
        image: "/assets/imgs/gallery/image-24.webp",
        text: "Ahmed specializes in digital marketing strategies...",
        socialLinks: [
          { icon: "fa-facebook-f", url: "#" },
          { icon: "fa-twitter", url: "#" },
          { icon: "fa-linkedin-in", url: "#" },
        ],
      },
      recentBlogs: [
        { title: "Global branding impact", date: "Feb 12, 2025", image: "/assets/imgs/blog/blog-22.webp", url: "/ai-agency/blog/leveragin-data-from-averto-marketing-success" },
        { title: "Design Trends 2025", date: "Apr 2, 2025", image: "/assets/imgs/blog/blog-24.webp", url: "/ai-agency/blog/design-trends-2025" },
      ],
      popularTags: ["Marketing", "Influencer", "Social Media", "Strategy"],
    },
  },

  "the-benefits-of-influencer-marketing": {
    title: "The Benefits of Influencer Marketing",
    date: "March 5, 2025",
    commentsCount: 2,
    category: "MARKETING",
    introText: "Influencer marketing can greatly increase brand awareness...",
    coverImage: "/assets/images/bloggrid/blog-grid1.jpg",
    sections: [ /* same as before */ ],
    tags: ["Branding", "Design", "Corporate"],
    sidebar: {
      author: {
        name: "Ahmed Al-Badr",
        designation: "Marketing Specialist",
        image: "/assets/imgs/gallery/image-24.webp",
        text: "Ahmed specializes in digital marketing strategies...",
        socialLinks: [
          { icon: "fa-facebook-f", url: "#" },
          { icon: "fa-twitter", url: "#" },
          { icon: "fa-linkedin-in", url: "#" },
        ],
      },
      recentBlogs: [
        { title: "Global branding impact", date: "Feb 12, 2025", image: "/assets/imgs/blog/blog-22.webp", url: "/ai-agency/blog/leveragin-data-from-averto-marketing-success" },
        { title: "Design Trends 2025", date: "Apr 2, 2025", image: "/assets/imgs/blog/blog-24.webp", url: "/ai-agency/blog/design-trends-2025" },
      ],
      popularTags: ["Marketing", "Influencer", "Social Media", "Strategy"],
    },
  },

"leveragin-data-from-averto-marketing-success": {
    title: "Leveraging data from Averto marketing success",
    date: "February 12, 2025",
    commentsCount: 3,
    category: "BRANDING",
    introText: "Averto, a creative studio...",
    coverImage: "/assets/images/bloggrid/blog-grid5.jpg",
    sections: [ /* same as before */ ],
    tags: ["Branding", "Design", "Corporate"],
    sidebar: {
      author: {
        name: "Sarah Thompson",
        designation: "Creative Director",
        image: "/assets/imgs/gallery/image-23.webp",
        text: "Sarah is a passionate creative leader...",
        socialLinks: [
          { icon: "fa-facebook-f", url: "#" },
          { icon: "fa-twitter", url: "#" },
          { icon: "fa-linkedin-in", url: "#" },
          { icon: "fa-instagram", url: "#" },
        ],
      },
      recentBlogs: [
        { title: "Latest design trends", date: "Jan 10, 2025", image: "/assets/imgs/blog/blog-1.webp", url: "/ai-agency/blog/the-benefits-of-influencer-marketing" },
        { title: "Marketing success tips", date: "Jan 15, 2025", image: "/assets/imgs/blog/blog-2.webp", url: "/ai-agency/blog/design-trends-2025" },
      ],
      popularTags: ["Branding", "Global", "Design", "Studio"],
    },
  },

  "the-role-of-analytics-market-research": {
    title: "The role of analytics market research",
    date: "April 2, 2025",
    commentsCount: 1,
    category: "DESIGN",
    introText: "Explore the design trends that will dominate...",
    coverImage: "/assets/images/bloggrid/blog-grid6.jpg",
    sections: [ /* same as before */ ],
    tags: ["Design", "Trends", "UX/UI"],
    sidebar: {
      author: {
        name: "Jessica Lopez",
        designation: "UX/UI Designer",
        image: "/assets/imgs/gallery/image-25.webp",
        text: "Jessica creates modern and user-centered designs...",
        socialLinks: [
          { icon: "fa-facebook-f", url: "#" },
          { icon: "fa-instagram", url: "#" },
        ],
      },
      recentBlogs: [
        { title: "Marketing Success", date: "Mar 5, 2025", image: "/assets/imgs/blog/blog-23.webp", url: "/ai-agency/blog/the-benefits-of-influencer-marketing" },
        { title: "Global branding impact", date: "Feb 12, 2025", image: "/assets/imgs/blog/blog-22.webp", url: "/ai-agency/blog/leveragin-data-from-averto-marketing-success" },
      ],
      popularTags: ["UX", "UI", "Design Trends", "3D Graphics"],
    },
  },
};

export interface Comment {
  name: string;
  date: string;
  avatar: string;
  rating: number;
  message: string;
}

// Keep the same comments array
export const comments: Comment[] = [
  {
    name: "Mark Patterson",
    date: "16 Feb, 2025",
    avatar: "/assets/imgs/client/client-4.webp",
    rating: 5,
    message: "As a designer, I appreciate Averto’s commitment to sustainability and inclusivity. It is great to see a creative studio making such a positive impact globally!",
  },
  {
    name: "Ahmed Al-Badr",
    date: "15 Feb, 2025",
    avatar: "/assets/imgs/client/client-5.webp",
    rating: 5,
    message: "It’s amazing to see a creative studio with such a widespread influence. Their ability to adapt to various cultural markets shows true mastery in design. Great article!",
  },
  {
    name: "Jessica Lopez",
    date: "12 Feb, 2025",
    avatar: "/assets/imgs/client/client-6.webp",
    rating: 5,
    message: "Averto’s approach to global design is truly inspiring! I love how they manage incorporate cultural nuances their work while still keeping things modern and fresh!",
  },
];
