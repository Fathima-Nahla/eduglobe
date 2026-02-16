import { ReactElement } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import AboutSection1 from "@/components/AiAgency/AboutSection1";
import VideoSection from "@/components/AiAgency/About/VideoSection";
import BrandSection from "@/components/AiAgency/BrandSection";
import TeamsSection from "@/components/AiAgency/TeamSection";
import TextSliderSection from "@/components/AiAgency/TextSliderSection";
import BlogSection from "@/components/AiAgency/BlogSection";
import FooterSection from "@/components/subjects/FooterSection";
import Header from "@/components/subjects/common/Header";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

// component data
import aboutData1 from "@/constant/AiAgency/about1";
import videoData from "@/constant/AiAgency/About/video";
import brandData from "@/constant/AiAgency/brand";
import textSliderData from "@/constant/AiAgency/text-slider";
import blogData from "@/constant/AiAgency/blog";
import footerData from "@/constant/subjects/footer";

export const metadata: Metadata = {
  title: "About Us || Averto - Creative Digital Agency NextJS Template",
  description:
    "Explore the About Us page of Averto - a modern, high-performance agency template built with Next.js. Meet the team, learn our mission, and discover why Averto is trusted by creative professionals and businesses.",
  keywords: [
    "Averto About Us",
    "NextJS about page",
    "agency template",
    "digital agency",
    "creative team template",
    "business website template",
    "responsive NextJS template",
    "modern agency design",
    "SEO friendly template",
    "professional web agency",
    "agency team page",
    "company profile",
    "NextJS clean UI",
    "startup website",
    "web design agency",
    "agency portfolio",
    "fast NextJS website",
    "customizable template",
    "about page design",
    "Averto template",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "About Page",
  },
};

const AboutPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-ai-agency">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb title="ABOUT" subTitle="Who We Are" pageName="ABOUT" />
          <AboutSection1 data={aboutData1} />
          <VideoSection data={videoData} />
          {/* <BrandSection data={brandData} brandSix={true} /> */}
          <TeamsSection />
          <TextSliderSection data={textSliderData} />
          <BlogSection data={blogData} />
        </main>
        <FooterSection data={footerData} />
      </SmoothScroll>
    </div>
  );
};
export default AboutPage;
