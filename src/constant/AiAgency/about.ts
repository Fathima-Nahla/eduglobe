export interface AboutData {
  subtitle: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  aboutLink: string;
  buttonText: string;
}
const aboutData = {
  subtitle: " ABOUT US",
  title: "Empowering Students, One Lesson at a Time",
  paragraphs: [
    "At EduGlobal Online, we believe learning should be accessible, engaging, and tailored to each student s unique needs.",
    "Our platform connects learners with experienced tutors across every subject and grade level, providing personalized guidance that helps students build confidence and achieve academic success.",
  ],
  image: "/assets/imgs/shape/shape-23.webp",
  imageAlt: "About AI",
  aboutLink: "/subjects-we-offer",
  buttonText: "Our Subjects",
};

export default aboutData;


