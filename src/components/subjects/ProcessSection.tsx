"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";
import {ProcessData} from "@/constant/AiAgency/process";
import { AccordionEventKey } from "react-bootstrap/esm/AccordionContext";

interface ProcessSectionProps {
  data: ProcessData;
  type?:string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({type, data: processData }) => {
  const [activeKey, setActiveKey] = useState<string>("0");

  const handleAccordionToggle = (key: AccordionEventKey) => {
    const strKey = key?.toString() ?? "0";
    setActiveKey(activeKey === strKey ? "0" : strKey);
  };


  return (
    <section style={{overflow:"hidden"}} className={`process-area-4 ${type === "v2" ? "section-m-spacing" : ""}`}>
      <div className="container">
        <div  className="process-area-4-inner">
          <div className="section-content section-spacing">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <div className="section-subtitle">{processData?.subtitle}</div>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{processData?.title}</h2>
              </div>
            </div>

            <div className="accordion-wrapper-4 accordion-active">
              <Accordion
                activeKey={activeKey}
                onSelect={(key) => handleAccordionToggle(key)}
              >
                {processData?.steps?.map((step, index) => (
                  <Accordion.Item
                    eventKey={String(index)}
                    key={index}
                    className={activeKey === String(index) ? "active" : ""}
                  >
                    <Accordion.Header>{step?.title}</Accordion.Header>
                    <Accordion.Body>{step?.description}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Video Section */}
          <div className="section-thumb fade-anim" data-direction="right" suppressHydrationWarning={true}>
            <img src="/images/subjects/Video.png" alt="how we work"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;