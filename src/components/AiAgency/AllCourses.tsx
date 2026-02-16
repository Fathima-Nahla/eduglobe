"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const allCourses = [
  {
    title: "Science K1",
    level: "Elementary",
    desc: "Spark curiosity with fun, hands-on science activities for little explorers.",
    img: "/assets/images/science/science1.jpg",
    alt: "A person holds a ball in front of a metal stand, showcasing a moment of focus and anticipation.",
  },
  {
    title: "Science K2",
    level: "Elementary",
    desc: "Build early science skills through interactive experiments and playful learning.",
    img: "/assets/images/science/science2.jpg",
    alt: "A young girl examines a specimen through a microscope on a table, engaged in her research.",
  },
  {
    title: "Physics K9",
    level: "High School",
    desc: "Discover the laws of motion and energy with real-world examples.",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "Chemistry K10",
    level: "High School",
    desc: "Explore elements, compounds, and reactions through practical experiments.",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "Biology K11",
    level: "High School",
    desc: "Dive into the world of plants, animals, and humans with engaging lessons.",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "Science K7",
    level: "Middle School",
    desc: "Strengthen your science foundation with hands-on experiments across subjects.",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "Financial Literacy K7",
    level: "Middle School",
    desc: "Learn budgeting, saving, spending, and basic financial decision-making through interactive, age-appropriate activities. ",
    img: "/assets/images/science/science1.jpg",
    alt: "A person holds a ball in front of a metal stand, showcasing a moment of focus and anticipation.",
  },
  {
    title: "Basic Concepts of Economics K8",
    level: "Middle School",
    desc: "Explore fundamental economic ideas such as supply, demand, trade, and markets, integrated into engaging lessons. ",
    img: "/assets/images/science/science2.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "High School Economics K10",
    level: "High School",
    desc: "Develop a solid understanding of core economic principles and real-world applications. ",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "AP Economics - Micro K11",
    level: "High School",
    desc: "Study individual markets, consumer behavior, and decision-making with practical examples.  ",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "AP Economics - Macro K12",
    level: "High School",
    desc: " Understand national economies, fiscal and monetary policies, and global economic trends. ",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "IB Curriculum Economics K11",
    level: "High School",
    desc: "Explore global economic systems, analytical frameworks, and market structures through the IB syllabus.  ",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "English K1",
    level: "Elementary",
    desc: " Develop early reading and speaking skills through fun stories and songs. ",
    img: "/assets/images/science/science1.jpg",
    alt: "A person holds a ball in front of a metal stand, showcasing a moment of focus and anticipation.",
  },
  {
    title: "English K2",
    level: "Elementary",
    desc: "Build vocabulary, comprehension, and basic writing skills with interactive activities.",
    img: "/assets/images/science/science2.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "English K6",
    level: "Middle School",
    desc: "Strengthen reading comprehension, grammar, and creative writing with practical exercises. ",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "English K7",
    level: "Middle School",
    desc: "Enhance critical thinking and communication skills through essays, stories, and vocabulary practice. ",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "English K10",
    level: "High School",
    desc: "Master advanced writing, literature, and comprehension skills for academic success. ",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "English K12",
    level: "High School",
    desc: " Refine reading, writing, and analytical skills for exams, college, and real-world communication. ",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "Math - K1",
    level: "Elementary",
    desc: "Make numbers fun with counting, shapes, and playful problem-solving. ",
    img: "/assets/images/science/science1.jpg",
    alt: "A person holds a ball in front of a metal stand, showcasing a moment of focus and anticipation.",
  },
  {
    title: "Math - K2",
    level: "Elementary",
    desc: "Build early math skills through interactive games and hands-on activities. ",
    img: "/assets/images/science/science2.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "Math Grade 7",
    level: "Middle School",
    desc: "Master fractions, decimals, and geometry with engaging, real-world examples. ",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "Math Grade 8",
    level: "Middle School",
    desc: "Strengthen algebra, ratios, and problem-solving skills with practical exercises.  ",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "Math Grade 11",
    level: "High School",
    desc: " Explore advanced algebra, trigonometry, and statistics with step-by-step guidance.  ",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
  {
    title: "Math Grade 12",
    level: "High School",
    desc: "Prepare for exams and real-life applications with calculus, probability, and analytical problem-solving. ",
    img: "/assets/images/science/science3.jpg",
    alt: "Two people wearing lab coats observing a microscope, engaged in scientific research.",
  },
];

export default function AllCourses() {
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
            <h2>Courses We Offer</h2>

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
