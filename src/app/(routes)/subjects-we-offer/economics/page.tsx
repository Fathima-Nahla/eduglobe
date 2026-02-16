import { ReactElement } from "react";
import { Metadata } from "next";
import Header from "@/components/subjects/common/Header";
import Breadcrumb from "@/components/MarketingAgency/common/Breadcrumb";
import PortfolioDetails from "@/components/MarketingAgency/PortfolioDetails/PortfolioDetails";
import PortfolioSliderSection from "@/components/MarketingAgency/PortfolioDetails/PortfolioSliderSection";
import portfolioSliderData from "@/constant/MarketingAgency/PortfolioDetails/portfolio-data";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";
import FooterSection from "@/components/subjects/FooterSection";

// all data
import portfolioDetailsData from "@/constant/MarketingAgency/PortfolioDetails/portfolio-details-data";
import footerData from "@/constant/subjects/footer";
import CoursesSection from "@/components/AiAgency/CoursesSection";
import ScienceTutors from "@/components/AiAgency/Tutors";
import ProcessSection from "@/components/subjects/ProcessSection";
import TestimonialSection from "@/components/AiAgency/TestimonialSection";
import FrameSection from "@/components/subjects/FrameSection";

import processData from "@/constant/AiAgency/process";
import testimonialData from "@/constant/AiAgency/testimonial";
import blogData from "@/constant/AiAgency/blog";

import BlogSection from "@/components/AiAgency/BlogSection";
import EconomicDetails from "@/components/MarketingAgency/PortfolioDetails/EconomicsDetails";
import economicsDetailsData from "@/constant/MarketingAgency/PortfolioDetails/economics-details-data";
import EconomicsCourse from "@/components/AiAgency/EconomicsCourse";
import EconomicsTutors from "@/components/AiAgency/EconomicsTutor";

export const metadata: Metadata = {
  title:
    "Portfolio Details || Averto - Creative Digital Agency NextJS Template",
  description:
    "Dive into detailed case studies and project insights with the Averto Portfolio Details template. Perfect for showcasing your creative process, technologies used, and impactful results with SEO and performance in mind.",
  keywords: [
    "Averto portfolio details",
    "NextJS portfolio details template",
    "project case study",
    "detailed portfolio page",
    "creative project insights",
    "responsive portfolio details",
    "SEO optimized project page",
    "digital agency portfolio details",
    "startup project showcase",
    "professional portfolio layout",
    "frontend developer case study",
    "technology showcase",
    "creative process display",
    "modern portfolio details page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Portfolio Details Page",
  },
};

const economics = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />

      <SmoothScroll>
        <main>
          <Breadcrumb
            title="ECONOMICS"
            subTitle="Made Simple"
            pageName=" ECONOMICS"
          />
          <EconomicDetails data={economicsDetailsData} />

          <EconomicsCourse />
          <EconomicsTutors />
          <ProcessSection data={processData} />
          <TestimonialSection data={testimonialData} />
          <FrameSection />
          {/* <BlogGridSection data={blogData}/> */}
          <BlogSection data={blogData} />
        </main>
        <div className="body-marketing-agency">
          <FooterSection data={footerData} />
        </div>
      </SmoothScroll>
    </div>
  );
};
export default economics;
