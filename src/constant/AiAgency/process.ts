export interface ProcessStep {
  title: string;
  description: string;
  active: boolean;
}

export interface ProcessData {
  subtitle: string;
  title: string;
  videoUrl: string;
  steps: ProcessStep[];
}

const processData: ProcessData = {
  subtitle: "WHY CHOOSE US?",
  title: "Your Learning, Our Priority",
  videoUrl:"/videos/how_we_work.mp4",
  steps: [
    {
      title: "Expert Tutors",
      description:
        "Learn from qualified professionals who bring experience and passion. They bring years of teaching experience and a passion for education, ensuring that every student receives guidance from someone who teach it effectively.",
      active: true,
    },
    {
      title: "Personalized Learning",
      description:
        "We begin the ideation phase where we brainstorm and design solutions based on the information gathered. We present options and select the one that aligns best with your goals.",
      active: false,
    },
    {
      title: "Flexible Scheduling",
      description:
        "We develop and integrate the AI-driven solution, ensuring it meets your specifications and delivers the intended business value. Our team supports you through deployment and ensures smooth integration.",
      active: false,
    },
  ],
};

export default processData;