"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IProject, WorkData } from "@/constant/subjects/workTwo";
import NiceSelectWrapper from "@/components/subjects/NiceSelect/NiceSelectWrapper";
import WorkSlider from "@/components/subjects/Portfolio/WorkSlider";
import TutorCard from "./TutorCard";
import TheTutors from "@/components/grades/Tutor";

interface WorkProps {
  pageInner?: boolean;
  pageInnerSlider?: boolean;
  type?: boolean | number;
  data: WorkData;
}

const tutors02 = [
  {
    id: 1,
    name: "Alexandra Moore",
    degree: "MSC, Physics",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    background: "/assets/images/science/img1.jpg",
    rating: 4.9,
    rate: 45,
    tag: "Elementary",

    experience: "10yr",
  },
  {
    id: 2,
    name: "Alexandra Moore",
    degree: "MSC, Physics",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    background: "/assets/images/science/img2.jpg",
    rating: 4.9,
    rate: 45,
    tag: "Elementary",

    experience: "10yr",
  },
  {
    id: 3,
    name: "Alexandra Moore",
    degree: "MSC, Physics",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    background: "/assets/images/science/img3.jpg",
    rating: 4.9,
    rate: 45,
    tag: "Higher Secondary",
    experience: "10yr",
  },
];

const tutors01 = [
  {
    id: 1,
    title: "Science",
    desc: "Science comes alive at EduGlobal Online, where students explore and discover the world around them.",
    image: "/images/grades/bg1.png",
    tag: "Elementary",
    link: "",
  },
  {
    id: 2,
    title: "Math",
    desc: "Math becomes clear at EduGlobal Online, helping students solve problems and master numbers with confidence.",
    image: "/images/grades/bg2.png",
    tag: "Higher Secondary",
    link: "",
  },
  {
    id: 3,
    title: "Economics",
    desc: "Economics makes sense at EduGlobal Online, showing students how money, markets, and choices shape the world.",
    image: "/images/grades/bg1.png",
    tag: "Elementary",
    price: "",
  },
];

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

  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedLevel, setSelectedLevel] = useState("Filter by");
  const [open, setOpen] = useState(false);

  const handleLevelChange = (e: string) => {
    setSelectedLevel(e);
    setOpen(false);
  };

  const tutors2 =
    selectedLevel === "Filter by" || selectedLevel === "All"
      ? tutors02
      : tutors02.filter(
          (course) => course.tag.toLowerCase() === selectedLevel.toLowerCase()
        );
  const tutors =
    selectedLevel === "Filter by" || selectedLevel === "All"
      ? tutors01
      : tutors01.filter(
          (course) => course.tag.toLowerCase() === selectedLevel.toLowerCase()
        );

  const WorkFilter = () => {
    return (
      <div className="section-header">
        <div className="meta fade-anim" suppressHydrationWarning={true}>
          <p className="total-item">All Grades (12)</p>
        </div>
        <div className={`filter-box filter-box01 ${open ? "open" : ""} `}>
          <button onClick={() => setOpen(!open)} className="filter-select01">
            {selectedLevel}
          </button>

          {open && (
            <ul className="list">
              <li
                className="list-opt"
                onClick={() => handleLevelChange("All")}>
                All
              </li>
              <li
                className="list-opt"
                onClick={() => handleLevelChange("Elementary")}>
                Elementary
              </li>
              <li
                className="list-opt"
                onClick={() => handleLevelChange("Higher secondary")}>
                Higher Secondary
              </li>
            </ul>
          )}
        </div>
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
              <div className="title-wrapper">
                <h2 className="pricing-title">Available Courses</h2>
              </div>
              <div style={{ marginTop: "-1rem" }} className="tutors-grid">
                {tutors.map((tutor) => (
                  <TutorCard key={tutor.id} tutor={tutor} />
                ))}
                {tutors.length === 0 && <p>No courses found.</p>}
              </div>
              <div style={{ marginTop: "4rem" }} className="title-wrapper">
                <h2 className="pricing-title">Available Tutors</h2>
              </div>
              <div
                style={{ marginTop: "-1rem" }}
                className="tutors-grid self-grade">
                {tutors2.map((tutor) => (
                  // <div key={tutor.id} style={{padding: "0.8rem", background:'#F8F8F8', borderRadius: "1.2rem"}}>
                  <TheTutors key={tutor.id} tutor={tutor} />
                  // {/* </div> */}
                ))}
                {tutors2.length === 0 && <p>No tutors found.</p>}
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
