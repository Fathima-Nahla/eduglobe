"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IProject, WorkData } from "@/constant/subjects/workTwo";
import NiceSelectWrapper from "@/components/subjects/NiceSelect/NiceSelectWrapper";
import WorkSlider from "@/components/subjects/Portfolio/WorkSlider";
import TutorCard from "./TutorCard";

interface WorkProps {
  pageInner?: boolean;
  pageInnerSlider?: boolean;
  type?: boolean | number;
  data: WorkData;
}

const tutorss = [
  {
    id: 1,
    name: "Alexandra Moore",
    expertise: "Math & Science Expert",
    image: "/images/pricing/tutor1.png",
    tag: "Hourly",
    price: 29,
  },
  {
    id: 2,
    name: "Michael Chen",
    expertise: "Computer Science & Programming",
    image: "/images/pricing/tutor2.png",
    tag: "Weekly",
    price: 35,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    expertise: "English & Literature",
    image: "/images/pricing/tutor1.png",
    tag: "Hourly",
    price: 25,
  },
  {
    id: 4,
    name: "David Rodriguez",
    expertise: "Physics & Engineering",
    image: "/images/pricing/tutor2.png",
    tag: "Weekly",
    price: 40,
  },
  {
    id: 5,
    name: "Emily Watson",
    expertise: "Chemistry & Biology",
    image: "/images/pricing/tutor1.png",
    tag: "Hourly",
    price: 32,
  },
  {
    id: 6,
    name: "James Wilson",
    expertise: "History & Social Studies",
    image: "/images/pricing/tutor2.png",
    tag: "Weekly",
    price: 28,
  },
  {
    id: 7,
    name: "Lisa Anderson",
    expertise: "Art & Design",
    image: "/images/pricing/tutor1.png",
    tag: "Monthly",
    price: 30,
  },
  {
    id: 8,
    name: "Robert Taylor",
    expertise: "Music Theory & Piano",
    image: "/images/pricing/tutor2.png",
    tag: "Hourly",
    price: 35,
  },
  {
    id: 9,
    name: "Jennifer Lee",
    expertise: "Spanish & French Languages",
    image: "/images/pricing/tutor1.png",
    tag: "Monthly",
    price: 27,
  },
  {
    id: 10,
    name: "Thomas Brown",
    expertise: "Economics & Business",
    image: "/images/pricing/tutor2.png",
    tag: "Monthly",
    price: 38,
  },
  {
    id: 11,
    name: "Amanda Martinez",
    expertise: "Psychology & Counseling",
    image: "/images/pricing/tutor1.png",
    tag: "Hourly",
    price: 33,
  },
  {
    id: 12,
    name: "Christopher Davis",
    expertise: "Physical Education & Sports",
    image: "/images/pricing/tutor2.png",
    tag: "Monthly",
    price: 26,
  },
];

const WorkSection: React.FC<WorkProps> = ({
  pageInner,
  pageInnerSlider,
  type = false,
  data: workData,
}) => {
  const [selectedLevel, setSelectedLevel] = useState("Filter by");
  const [open, setOpen] = useState(false);

  const handleLevelChange = (e: string) => {
    setSelectedLevel(e);
    setOpen(false);
  };

  const tutors =
    selectedLevel === "Filter by" || selectedLevel === "All"
      ? tutorss
      : tutorss.filter(
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
              <li className="list-opt" onClick={() => handleLevelChange("All")}>
                All
              </li>
              <li
                className="list-opt"
                onClick={() => handleLevelChange("Hourly")}>
                Hourly
              </li>
              <li
                className="list-opt"
                onClick={() => handleLevelChange("Weekly")}>
                Weekly
              </li>
              <li
                className="list-opt"
                onClick={() => handleLevelChange("Monthly")}>
                Monthly
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
                <h2 className="pricing-title">Your Learning, Your Way</h2>
              </div>
              <div className="tutors-grid">
                {tutors.map((tutor) => (
                  <TutorCard key={tutor.id} tutor={tutor} />
                ))}
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
