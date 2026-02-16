"use client";

import { ReactElement } from "react";
import { useParams } from "next/navigation";
import BlogSingle from "@/components/AiAgency/Blog/BlogSingle";
import { blogSingleData, comments } from "@/constant/AiAgency/blog/blogSingleData";
import Header from "@/components/subjects/common/Header";
import FooterSection from "@/components/subjects/FooterSection";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

// Optional: import footer data
import footerData from "@/constant/subjects/footer";

const BlogDetailPage = (): ReactElement => {
  const params = useParams();
  const slug = params.slug;

  // Ensure slug is a string
  if (!slug || Array.isArray(slug)) return <div>Blog not found</div>;

  // Get blog from slug mapping
  const blog = blogSingleData[slug];

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="body-wrapper body-ai-agency">
      <Header />
      <SmoothScroll>
        <main>
          <BlogSingle post={blog} comments={comments} />
        </main>
        <FooterSection data={footerData} />
      </SmoothScroll>
    </div>
  );
};

export default BlogDetailPage;
