import Link from "next/link";
import React from "react";

interface ISocialLink {
  icon: string;
  url: string;
}

interface IAuthorInfo {
  name: string;
  designation: string;
  image: string;
  text: string;
  socialLinks: ISocialLink[];
}

interface IRecentBlog {
  title: string;
  date: string;
  image: string;
  url: string;
}

interface IBlogSidebarData {
  author: IAuthorInfo;
  recentBlogs: IRecentBlog[];
  popularTags: string[];
}

interface BlogSidebarProps {
  data?: IBlogSidebarData;
}


const BlogSidebar: React.FC<BlogSidebarProps> = ({ data }) => {
  const { author, recentBlogs, popularTags } = data || {
    author: {
      name: "",
      designation: "",
      image: "",
      text: "",
      socialLinks: [],
    },
    recentBlogs: [],
    popularTags: [],
  };

  return (
    <div className="blog-sidebar">
      {/* Author Info Box */}
      <div className="blog-sidebar-box fade-anim">
        <div className="author-info">
          <div className="thumb">
            <img src={author.image} alt="Author" />
          </div>
          <div className="content">
            <h3 className="name">{author.name}</h3>
            <span className="designation">{author.designation}</span>
            <p className="text">{author.text}</p>
            <div className="social-links">
              {author.socialLinks.map((link, index) => (
                <Link href={link.url} key={index}>
                  <i className={`fa-brands ${link.icon}`}></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Box */}
      <div className="blog-sidebar-box fade-anim">
        <h3 className="title-box">Search bar</h3>
        <div className="search-wrapper">
          <form action="#" className="search-form">
            <div className="input-field">
              <input type="text" placeholder="Search anything" />
              <button type="submit" className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Recent Blogs Box */}
      <div className="blog-sidebar-box fade-anim">
        <h3 className="title-box">Recent blogs</h3>
        <div className="blogs-wrapper">
          {recentBlogs.map((blog, idx) => (
            <article className="blog" key={idx}>
              <div className="thumb">
                <a href={blog.url}>
                  <img src={blog.image} alt="Recent Blog" />
                </a>
              </div>
              <div className="content-wrapper">
                <div className="content">
                  <div className="meta">
                    <span className="date">{blog.date}</span>
                  </div>
                  <h2 className="title">
                    <a href={blog.url}>{blog.title}</a>
                  </h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Popular Tags Box */}
      <div className="blog-sidebar-box fade-anim">
        <h3 className="title-box">Popular tags</h3>
        <div className="tags-wrapper">
          {popularTags.map((tag, idx) => (
            <Link href="/ai-agency/blog" key={idx}>
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
