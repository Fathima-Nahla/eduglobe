"use client";
import React from "react";
import Link from "next/link";
import { IProject, WorkData } from "@/constant/subjects/workTwo";
import NiceSelectWrapper from "@/components/subjects/NiceSelect/NiceSelectWrapper";
import WorkSlider from "@/components/subjects/Portfolio/WorkSlider";

interface WorkProps {
  pageInner?: boolean;
  pageInnerSlider?: boolean;
  type?: boolean | number;
  data: WorkData;
}

const WorkSection: React.FC<WorkProps> = ({
  pageInner,
  pageInnerSlider,
  type = false,
  data: workData,
}) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Sort by: ${e.target.value}
    console.log(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Category: ${e.target.value}
    console.log(e.target.value);
  };

  const WorkFilter = () => {
    return (
      <div className="section-header">
        <div className="meta fade-anim" suppressHydrationWarning={true}>
          <p className="total-item">All Subjects (4)</p>
        </div>
        {/* <div
          className="filter-wrapper fade-anim"
          suppressHydrationWarning={true}>
          <div className="filter-box">
            <NiceSelectWrapper
              // name="category"
              id="category"
              className="right"
              defaultOption="Filter by"
              onChange={handleCategoryChange}
              options={[
                { value: "product", label: "Product" },
                { value: "design", label: "Design" },
                { value: "mockup", label: "Mockup" },
                { value: "branding", label: "Branding" },
              ]}></NiceSelectWrapper>
          </div>
        </div> */}
      </div>
    );
  };

  const WorkAreaInner = () => {
    return (
      <section className={`work-area-${type}`}>
        <div className="container">
          <div
            className={`work-area-${type}-inner ${
              type === 3 ? "section-spacing-top" : "section-spacing"
            }`}>
            <WorkFilter />
            <div
              className="works-wrapper-box fade-anim"
              suppressHydrationWarning={true}>
              <div className="works-wrapper">
                {workData?.projects?.map((item, index) => (
                  <div
                    className={`work-box-${type} fade-anim`}
                    key={item?.id}
                    suppressHydrationWarning={true}>
                    <div className="thumb">
                      <div className="meta">
                        {item?.tags?.map((tag, idx) => (
                          <span style={{letterSpacing: "-0.5px"}} className="tag" key={idx}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div
                        className="img_anim_reveal"
                        suppressHydrationWarning={true}>
                        <Link href={item?.link || "#"}>
                          <img
                            src={item?.image}
                            alt={item?.title || "Project image"}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <span className={`number ${type === 7 ? "d-none" : ""}`}>
                        {String(index + 1).padStart(2, "0")}
                        <span className="shape">/</span>
                      </span>
                      <h3 className="title mt-1">{item?.title}</h3>
                      <p style={{ letterSpacing: "-0.5px", marginBottom: "10px"  }} className="text mt-1">{item?.desc}</p>
                      
                      {/* <div className="subjects-author">
                        <div className="subavatar">
                          <img src={item?.avatar} alt={item?.name} />
                        </div>
                        <h3 className="subtext">{item?.name}</h3>
                      </div> */}
                      <div
                        className={`t-btn-group mt-1`}>
                        <Link
                          className="t-btn t-btn-circle"
                          href={item?.link || "#"}>
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link
                          className="t-btn t-btn-primary"
                          href={item?.link || "#"}>
                          Know More
                        </Link>
                        <Link
                          className="t-btn t-btn-circle"
                          href={item?.link || "#"}>
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {!workData?.projects?.length && (
                  <p>No projects available at this time.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const WorkAreaSlider = () => {
    return (
      <section className="work-area-8">
        <div className="container">
          <div
            className={`work-area-8-inner  ${
              type === 3 ? "section-spacing-top" : "section-spacing"
            }`}>
            <WorkFilter />
            <div className="work-area-2 page-portfolio-3">
              <div
                className="works-wrapper-box fade-anim"
                suppressHydrationWarning={true}>
                <div className="works-wrapper">
                  <WorkSlider work={workData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const WorkAreaMain = () => {
    return (
      <section className="work-area">
        <div className="work-area-inner section-spacing">
          <div className="container">
            <div className="section-header">
              <div
                className="section-title-wrapper fade-anim"
                suppressHydrationWarning={true}>
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">
                    {workData?.sectionSubtitle}
                  </span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">{workData?.sectionTitle}</h2>
                </div>
              </div>
              <div
                className="btn-wrapper fade-anim"
                suppressHydrationWarning={true}>
                <div className="t-btn-group">
                  <Link
                    className="t-btn t-btn-circle"
                    href={workData?.viewAllLink || "#"}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    className="t-btn t-btn-primary"
                    href={workData?.viewAllLink || "#"}>
                    {workData?.viewAllText}
                  </Link>
                  <Link
                    className="t-btn t-btn-circle"
                    href={workData?.viewAllLink || "#"}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="works-wrapper-box fade-anim"
            suppressHydrationWarning={true}>
            <div className="container">
              <div className="works-wrapper">
                {workData?.projects?.map((item: IProject, index: number) => (
                  <div
                    className="work-box-1 fade-anim"
                    key={item?.id}
                    suppressHydrationWarning={true}>
                    <div className="thumb">
                      <div className="meta">
                        {item?.tags?.map((tag: string, idx: number) => (
                          <span className="tag" key={idx}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div
                        className="img_anim_reveal"
                        suppressHydrationWarning={true}>
                        <Link href={item?.link || "#"}>
                          <img
                            src={item?.image}
                            alt={item?.title || "Project image"}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <span className="number">
                        {String(index + 1).padStart(2, "0")}
                        <span className="shape">/</span>
                      </span>
                      <h3 className="title">
                        <Link href={item?.link || "#"}>{item?.title}</Link>
                      </h3>
                      <div className="t-btn-group">
                        <Link
                          className="t-btn t-btn-circle"
                          href={item?.link || "#"}>
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link
                          className="t-btn t-btn-primary"
                          href={item?.link || "#"}>
                          View Full Project
                        </Link>
                        <Link
                          className="t-btn t-btn-circle"
                          href={item?.link || "#"}>
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {!workData?.projects?.length && (
                  <p>No projects available at this time.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  if (pageInnerSlider) {
    return <WorkAreaSlider />;
  }

  return pageInner ? <WorkAreaInner /> : <WorkAreaMain />;
};

export default WorkSection;
