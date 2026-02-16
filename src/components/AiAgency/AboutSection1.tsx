import Link from "next/link";
import { AboutData1 } from "@/constant/AiAgency/about1";
interface AboutProps{
  data:AboutData1;
}
const AboutSection1:React.FC<AboutProps> = ({data:aboutData1}) => {
  return (
    <section className="about-area-4">
      <div className="container">
        <div className="about-area-4-inner section-spacing">
          <div className="section-content-wrapper">
            <div className="thumb fade-anim" data-direction="left" suppressHydrationWarning={true}>
              <img
                src={aboutData1?.image}
                alt={aboutData1?.imageAlt || "About Image"}
              />
            </div>
            <div className="section-content">
              <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">
                    {aboutData1?.subtitle}
                  </span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title1">{aboutData1?.title}</h2>
                </div>
              </div>
              <div
                className="text-wrapper fade-anim"
                data-direction="right"
                suppressHydrationWarning={true}
              >
                {aboutData1?.paragraphs?.map((text, idx) => (
                  <p className="text" key={idx}>
                    {text}
                  </p>
                ))}
              </div>
              <div
                className="btn-wrapper fade-anim"
                data-direction="right"
                suppressHydrationWarning={true}
              >
                <div className="t-btn-group">
                  <Link
                    className="t-btn t-btn-circle"
                    href={aboutData1?.aboutLink || "#"}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    className="t-btn t-btn-primary"
                    href={aboutData1?.aboutLink || "#"}
                  >
                    {aboutData1?.buttonText || "About Agency"}
                  </Link>
                  <Link
                    className="t-btn t-btn-circle"
                    href={aboutData1?.aboutLink || "#"}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;