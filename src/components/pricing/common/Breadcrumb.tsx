import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  title: string;
  subTitle: string;
  pageName?: string;
  showBreadcrumb?: boolean; // new optional prop
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title,
  subTitle,
  pageName,
  showBreadcrumb = true, // default: true
}) => {
  const finalTitle = title?.trim() || "TITLE";
  const finalSubTitle = subTitle?.trim() || "Sub Title";
  const finalPageName = pageName?.trim() || "Page Name";

  return (
    <section className="page-title-area">
      <div className="container">
        <div className="page-title-area-inner section-spacing-top">
          <div className="area-lines">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`line-${i + 1}`}></div>
            ))}
          </div>
          <div className="section-content-wrapper">
            <div
              className="content-shape-1 fade-anim"
              data-direction="top"
              data-ease="bounce"
              data-delay="0.60"
              data-offset="100"
            >
              <img src="/assets/imgs/shape/shape-36.webp" alt="image" />
            </div>
            <div className="section-content">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h1
                    style={{ letterSpacing: "-2px" }}
                    className="section-title char-anim"
                  >
                    {finalTitle}
                  </h1>
                </div>
                <div className="subtitle-wrapper">
                  <span
                    className="section-subtitle char-anim"
                    data-delay="0.75"
                  >
                    {finalSubTitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Only render this if showBreadcrumb is true */}
            {showBreadcrumb && (
              <div
                className="breadcrumb-wrapper fade-anim"
                data-direction="left"
                data-offset="100"
                data-delay="0.90"
              >
                <ul className="breadcrumb">
                  <li>
                    <Link href="/">HOME</Link>
                  </li>
                  <li>{finalPageName}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;

