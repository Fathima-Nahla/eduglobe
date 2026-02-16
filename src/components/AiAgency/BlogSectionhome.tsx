"use client";

import Link from "next/link";
import { useState } from "react";
import { BlogData } from "@/constant/AiAgency/blogAll";

interface BlogProps {
  data: BlogData;
  all?: boolean;
}

const BlogSection: React.FC<BlogProps> = ({ all, data: blogData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  // Calculate pagination
  const totalBlogs = blogData?.blogs?.length || 0;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  
  // Get blogs for current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  
  const blogPosts = all 
    ? blogData?.blogs?.slice(indexOfFirstBlog, indexOfLastBlog)
    : blogData?.blogs?.slice(0, 3);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of blog section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= maxPagesToShow; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };

  return (
    <section className="blog-area-5">
      <div className="container">
        <div className="blog-area-5-inner section-spacing">
          {!all && (
            <div className="section-header">
              <div
                className="section-title-wrapper fade-anim"
                suppressHydrationWarning={true}
              >
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">{blogData?.subtitle}</span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">{blogData?.title}</h2>
                </div>
              </div>

              <div
                className="btn-wrapper fade-anim"
                suppressHydrationWarning={true}
              >
                <div className="t-btn-group">
                  <Link
                    className="t-btn t-btn-circle"
                    href={blogData?.cta?.url || "#"}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    className="t-btn t-btn-primary"
                    href={blogData?.cta?.url || "#"}
                  >
                    {blogData?.cta?.text}
                  </Link>
                  <Link
                    className="t-btn t-btn-circle"
                    href={blogData?.cta?.url || "#"}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="blogs-wrapper-box">
            <div className="blogs-wrapper">
  {blogPosts?.map((blog) => (
    <article key={blog.id} className="blog-5 fade-anim">
      <div className="thumb">
        <Link href={`/blogs/${blog.slug}`}>
          <img src={blog.image} alt={blog.title} />
        </Link>
      </div>
      <div className="content">
        <span className="tag">
          <i className="fa-solid fa-tag"></i>
          {blog.tag}
        </span>
        <h2 className="title">
          <Link href={`/blogs/${blog.slug}`}>
            {blog.title}
          </Link>
        </h2>
        <div className="meta">
          <span className="time">
            <i className="fa-regular fa-clock"></i>
            {blog.readTime}
          </span>
          <span className="date">
            <i className="fa-regular fa-calendar-days"></i>
            {blog.date}
          </span>
        </div>
      </div>
    </article>
  ))}
</div>

          </div>

          {all && totalPages > 1 && (
            <div className="blog-area-6">
              <div className="pagination fade-anim">
                <Link 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                  }}
                  style={{ 
                    opacity: currentPage === 1 ? 0.5 : 1,
                    pointerEvents: currentPage === 1 ? 'none' : 'auto'
                  }}
                >
                  <img src="/assets/imgs/icon/icon-12.webp" alt="left" />
                </Link>
                
                {getPageNumbers().map((pageNumber) => (
                  <Link
                    href="#"
                    key={pageNumber}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(pageNumber);
                    }}
                    className={pageNumber === currentPage ? "active" : ""}
                  >
                    {pageNumber}
                  </Link>
                ))}
                
                <Link 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) handlePageChange(currentPage + 1);
                  }}
                  style={{ 
                    opacity: currentPage === totalPages ? 0.5 : 1,
                    pointerEvents: currentPage === totalPages ? 'none' : 'auto'
                  }}
                >
                  <img src="/assets/imgs/icon/icon-13.webp" alt="right" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;