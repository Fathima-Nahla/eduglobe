"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IProject, WorkData } from "@/constant/subjects/workTwo";
import NiceSelectWrapper from "@/components/subjects/NiceSelect/NiceSelectWrapper";
import WorkSlider from "@/components/subjects/Portfolio/WorkSlider";
import TutorCard from "./TutorCard";
import TheTutors from "@/components/tutors/Tutor";

interface WorkProps {
  pageInner?: boolean;
  pageInnerSlider?: boolean;
  type?: boolean | number;
  data: WorkData;
}

const tutors2 = [
  { id: 1, name: "Alexandra Moore", degree: "M.Sc, Physics", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", background: "/assets/images/science/img1.jpg", rating: 4.9, rate: 45, experience: "10yr", tags: ["Physics", "Chemistry"] },
  { id: 2, name: "Sophia Turner", degree: "Ph.D, Chemistry", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop", background: "/assets/images/science/img2.jpg", rating: 4.8, rate: 50, experience: "8yr", tags: ["Chemistry"] },
  { id: 3, name: "Michael Carter", degree: "M.Sc, Mathematics", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop", background: "/assets/images/science/img3.jpg", rating: 4.9, rate: 42, experience: "12yr", tags: ["Physics", "Biology", "Chemistry"] },
  { id: 4, name: "Emily Rodriguez", degree: "Ph.D, Biology", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop", background: "/assets/images/science/img4.jpg", rating: 5.0, rate: 55, experience: "9yr", tags: ["Biology"] },
  { id: 5, name: "Daniel Kim", degree: "M.Sc, Computer Science", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop", background: "/assets/images/science/img5.jpg", rating: 4.7, rate: 48, experience: "7yr", tags: ["Chemistry", "Biology"] },
  { id: 6, name: "Hannah Lee", degree: "M.Sc, Environmental Science", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop", background: "/assets/images/science/img6.jpg", rating: 4.8, rate: 47, experience: "6yr", tags: ["Physics"] },
  { id: 7, name: "James Patel", degree: "Ph.D, Astronomy", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop", background: "/assets/images/science/img7.jpg", rating: 5.0, rate: 60, experience: "15yr", tags: ["Physics", "Chemistry"] },
  { id: 8, name: "Olivia Brown", degree: "M.Sc, Psychology", image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=200&h=200&fit=crop", background: "/assets/images/science/img8.jpg", rating: 4.9, rate: 52, experience: "11yr", tags: ["Biology", "Chemistry", "Physics"] },
  { id: 9, name: "William Anderson", degree: "Ph.D, Data Science", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop", background: "/assets/images/science/img9.jpg", rating: 4.9, rate: 58, experience: "13yr", tags: ["Chemistry", "Biology"] },
  { id: 10, name: "Isabella Martinez", degree: "M.Sc, Physics", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop", background: "/assets/images/science/img10.jpg", rating: 4.8, rate: 46, experience: "9yr", tags: ["Physics"] },
  { id: 11, name: "Ethan Hall", degree: "Ph.D, Chemistry", image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=200&h=200&fit=crop", background: "/assets/images/science/img11.jpg", rating: 4.7, rate: 49, experience: "10yr", tags: ["Chemistry", "Biology"] },
  { id: 12, name: "Mia Allen", degree: "M.Sc, Biology", image: "https://images.unsplash.com/photo-1544005313-7b4f17dca356?w=200&h=200&fit=crop", background: "/assets/images/science/img12.jpg", rating: 5.0, rate: 53, experience: "8yr", tags: ["Biology"] },
  { id: 13, name: "Alexander Scott", degree: "M.Sc, Physics", image: "https://images.unsplash.com/photo-1502767089025-6572583495b2?w=200&h=200&fit=crop", background: "/assets/images/science/img13.jpg", rating: 4.9, rate: 50, experience: "11yr", tags: ["Physics", "Chemistry"] },
  { id: 14, name: "Charlotte Young", degree: "Ph.D, Chemistry", image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=200&h=200&fit=crop", background: "/assets/images/science/img14.jpg", rating: 4.8, rate: 48, experience: "7yr", tags: ["Chemistry"] },
  { id: 15, name: "Benjamin Wright", degree: "M.Sc, Mathematics", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop", background: "/assets/images/science/img15.jpg", rating: 4.9, rate: 44, experience: "12yr", tags: ["Physics", "Biology"] },
  { id: 16, name: "Amelia King", degree: "Ph.D, Biology", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop", background: "/assets/images/science/img16.jpg", rating: 5.0, rate: 56, experience: "9yr", tags: ["Biology", "Chemistry"] },
  { id: 17, name: "Daniel Garcia", degree: "M.Sc, Computer Science", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop", background: "/assets/images/science/img17.jpg", rating: 4.7, rate: 47, experience: "7yr", tags: ["Chemistry"] },
  { id: 18, name: "Sophia Harris", degree: "M.Sc, Environmental Science", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop", background: "/assets/images/science/img18.jpg", rating: 4.8, rate: 49, experience: "6yr", tags: ["Physics", "Biology"] },
  { id: 19, name: "James Johnson", degree: "Ph.D, Astronomy", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop", background: "/assets/images/science/img19.jpg", rating: 5.0, rate: 61, experience: "15yr", tags: ["Physics", "Chemistry"] },
  { id: 20, name: "Olivia Wilson", degree: "M.Sc, Psychology", image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=200&h=200&fit=crop", background: "/assets/images/science/img20.jpg", rating: 4.9, rate: 51, experience: "11yr", tags: ["Biology", "Physics"] },
  { id: 21, name: "William Thomas", degree: "Ph.D, Data Science", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop", background: "/assets/images/science/img21.jpg", rating: 4.9, rate: 57, experience: "13yr", tags: ["Chemistry"] },
  { id: 22, name: "Emma White", degree: "M.Sc, Physics", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", background: "/assets/images/science/img22.jpg", rating: 4.8, rate: 46, experience: "10yr", tags: ["Physics", "Chemistry"] },
  { id: 23, name: "Liam Moore", degree: "M.Sc, Mathematics", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop", background: "/assets/images/science/img23.jpg", rating: 4.9, rate: 45, experience: "12yr", tags: ["Physics"] },
];

const WorkSection: React.FC<WorkProps> = ({
  pageInner,
  pageInnerSlider,
  type = false,
  data: workData,
}) => {
  // const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   // Sort by: ${e.target.value}
  //   console.log(e.target.value);
  // };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Category: ${e.target.value}
    console.log(e.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const tutorsPerPage = 9;

  const totalTutors = tutors2.length;
  const totalPages = Math.ceil(totalTutors / tutorsPerPage);

  const indexOfLastTutor = currentPage * tutorsPerPage;
  const indexOfFirstTutor = indexOfLastTutor - tutorsPerPage;

  const currentTutors = tutors2.slice(indexOfFirstTutor, indexOfLastTutor);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to the title-wrapper of tutors section
    const titleElement = document.querySelector(
      ".pricinggg-subtitle"
    ) as HTMLElement | null;

    if (titleElement) {
      window.scrollTo({
        top: titleElement.offsetTop - 200, // optional offset
        behavior: "smooth",
      });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= maxPagesToShow; i++) pages.push(i);
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++)
          pages.push(i);
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) pages.push(i);
      }
    }

    return pages;
  };

  const WorkFilter = () => {
    return (
      <div className="section-header">
        <div className="meta fade-anim" suppressHydrationWarning={true}>
          <p className="total-item">All Grades (12)</p>
        </div>
        <div
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
              { value: "all", label: "All" },
              { value: "Physics", label: "Physics" },
              { value: "Chemistry", label: "Chemistry" },
              { value: "Biology", label: "Biology" },
              ]}></NiceSelectWrapper>
          </div>
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
              type === 3 ? "section-spacing-top" : ""
            }`}>
            {/* <WorkFilter /> */}

            <div
              className="works-wrapper-box1 fade-anim"
              suppressHydrationWarning={true}>
              <div style={{ marginTop: "-1rem" }} className="title-wrapper">
                <span className="pricinggg-subtitle">Meet Professionals</span>
                <h2 className="pricinggg-title">Find a Tutor</h2>
              </div>
              <div
                style={{ marginTop: "-1.3rem" }}
                className="tutors-grid self-tutor">
                {currentTutors.map((tutor, i) => (
                  // <div key={tutor.id} style={{padding: "0.8rem", background:'#F8F8F8', borderRadius: "1.2rem"}}>
                  <TheTutors key={tutor.id} i={i} tutor={tutor} />
                  // {/* </div> */}
                ))}
              </div>
            </div>

            {totalPages > 1 && (
              <div className="blog-area-6">
                <div className="pagination fade-anim">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                    style={{
                      opacity: currentPage === 1 ? 0.5 : 1,
                      pointerEvents: currentPage === 1 ? "none" : "auto",
                    }}>
                    <img src="/assets/imgs/icon/icon-12.webp" alt="left" />
                  </a>

                  {getPageNumbers().map((pageNumber) => (
                    <a
                      href="#"
                      key={pageNumber}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(pageNumber);
                      }}
                      className={pageNumber === currentPage ? "active" : ""}>
                      {pageNumber}
                    </a>
                  ))}

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        handlePageChange(currentPage + 1);
                    }}
                    style={{
                      opacity: currentPage === totalPages ? 0.5 : 1,
                      pointerEvents:
                        currentPage === totalPages ? "none" : "auto",
                    }}>
                    <img src="/assets/imgs/icon/icon-13.webp" alt="right" />
                  </a>
                </div>
              </div>
            )}
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
