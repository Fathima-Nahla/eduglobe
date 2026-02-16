"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const allCourses = [
  {
    title: "Math - K1",
    level: "Elementary",
    desc: "Make numbers fun with counting, shapes, and playful problem-solving. ",
    img: "/assets/images/science/science1.jpg",
  },
  {
    title: "Math - K2",
    level: "Elementary",
    desc: "Build early math skills through interactive games and hands-on activities. ",
    img: "/assets/images/science/science2.jpg",
  },
  {
    title: "Math Grade 7",
    level: "Middle School",
    desc: "Master fractions, decimals, and geometry with engaging, real-world examples. ",
    img: "/assets/images/science/science3.jpg",
  },
  {
    title: "Math Grade 8",
    level: "Middle School",
    desc: "Strengthen algebra, ratios, and problem-solving skills with practical exercises.  ",
    img: "/assets/images/science/science3.jpg",
  },
  {
    title: "Math Grade 11",
    level: "High School",
    desc: " Explore advanced algebra, trigonometry, and statistics with step-by-step guidance.  ",
    img: "/assets/images/science/science3.jpg",
  },
  {
    title: "Math Grade 12",
    level: "High School",
    desc: "Prepare for exams and real-life applications with calculus, probability, and analytical problem-solving. ",
    img: "/assets/images/science/science3.jpg",
  },
];

export default function MathCourse() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedLevel, setSelectedLevel] = useState("Filter by");
  const [open, setOpen] = useState(false);

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
    setOpen(false);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const filteredCourses =
    selectedLevel === "Filter by" || selectedLevel === "All Levels"
      ? allCourses
      : allCourses.filter((course) => course.level === selectedLevel);

  return (
    <section className="courses-section">
      <div className="container">
        <div className="courses-wrapper section-spacing-top section-spacing-bottom">
          {/* Header with Title and Filter Dropdown */}
          <div className="courses-header">
            <h2>Courses in Mathematics</h2>

            <div className={`filter-box filter-box-dark ${open ? "open" : ""}`}>
              <button
                onClick={() => setOpen(!open)}
                className="filter-select-dark"
              >
                {selectedLevel}
              </button>

              {open && (
                <ul className="list-dark">
                  <li
                    className="list-opt-dark"
                    onClick={() => handleLevelChange("All Levels")}
                  >
                    All Levels
                  </li>
                  <li
                    className="list-opt-dark list-opt-dark"
                    onClick={() => handleLevelChange("Elementary")}
                  >
                    Elementary
                  </li>
                  <li
                    className="list-opt-dark list-opt-dark"
                    onClick={() => handleLevelChange("Middle School")}
                  >
                    Middle School
                  </li>
                  <li
                    className="list-opt-dark list-opt-dark"
                    onClick={() => handleLevelChange("High School")}
                  >
                    High School
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Scrollable Courses */}
          <div className="courses-container" ref={scrollRef}>
            {filteredCourses.map((course, i) => (
              <div className="course-card" key={i}>
                <div className="course-image">
                  <Image
                    src={course.img}
                    alt={course.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Bottom Right */}
          <div className="nav-buttons-bottom">
            <button onClick={() => scroll("left")} aria-label="Scroll left">
              <ArrowLeft size={16} />
            </button>
            <button onClick={() => scroll("right")} aria-label="Scroll right">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
