import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/pricing/common/Breadcrumb";
import ProcessSection from "@/components/subjects/ProcessSection";
import FooterSection from "@/components/subjects/FooterSection";
import Header from "@/components/subjects/common/Header";
import SmoothScroll from "@/components/subjects/Animation/SmoothScroll";

// all data
import footerData from "@/constant/subjects/footer";
import WorkTwoSection from "@/components/pricing/WorkTwoSection";
import workTwoData from "@/constant/subjects/workTwo";
import processData from "@/constant/AiAgency/process";
import FrameSection from "@/components/subjects/FrameSection";
import BlogSection from "@/components/AiAgency/BlogSection";
import TestimonialSlider from "@/components/AiAgency/TestimonialSection";
import blogData from "@/constant/AiAgency/blog";
import testimonialData from "@/constant/AiAgency/testimonial";
import WorkSection from "@/components/AiAgency/WorkSection";
import CoursesSection from "@/components/AiAgency/CoursesSection";
import ScienceTutors from "@/components/AiAgency/Tutors";
import AllCourses from "@/components/AiAgency/AllCourses";
import AllTutors from "@/components/AiAgency/AllTutors";

export const metadata: Metadata = {
  title: "Services || Averto - Creative Digital Agency NextJS Template",
  description:
    "Showcase your agency’s wide range of services with the Averto Services template. Designed to present offerings clearly and attractively, optimized for performance and SEO in Next.js.",
  keywords: [
    "Averto services page",
    "NextJS services template",
    "agency services overview",
    "service offerings",
    "responsive services layout",
    "SEO optimized services page",
    "digital agency services",
    "startup services showcase",
    "professional service presentation",
    "service features",
    "business services template",
    "modern services page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Services Page",
  },
};

const page = (): ReactElement => {
  return (
    <div className="body-wrapper body-ai-agency">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="LEARN "
            subTitle="Smarter"
            showBreadcrumb={false}
          />
          <div className="work-section-padding">
            <WorkSection />
          </div>

          <AllCourses />
          <AllTutors />
          <ProcessSection data={processData} />
          <TestimonialSlider data={testimonialData} />
          <FrameSection />
          <BlogSection data={blogData} />
        </main>
        <FooterSection data={footerData} />
      </SmoothScroll>
    </div>
  );
};
export default page;


