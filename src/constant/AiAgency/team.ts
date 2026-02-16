export interface TeamSectionContent {
  subtitle: string;
  title: string;
  completedProjects: string;
  projectsText: string;
  exploreLink: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  socials: {
    instagram: string;
    twitter: string;
    facebook: string;
    linkedin: string;
  };
}

export const teamSectionContent: TeamSectionContent = {
  subtitle: "FEATURED TUTORS",
  title: "Dedicated Professionals Guiding Students to Success",
  completedProjects: "50+",
  projectsText: "Featured Tutors",
  exploreLink: "/tutors",
};

export const teamMembers: TeamMember[] = [
  {
    name: "Alexandra Moore",
    position: "Math & Science Expert",
    image: "/assets/images/teamsection/team3.jpg",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    position: "English & Writing Specialist",
    image: "/assets/images/teamsection/team4.jpg",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jordan Williams",
    position: "Coding & STEM Instructor",
    image: "/assets/images/teamsection/team1.jpg",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Ethan Brooklyn",
    position: "Language Tutor",
    image: "/assets/images/teamsection/team2.jpg",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
];
