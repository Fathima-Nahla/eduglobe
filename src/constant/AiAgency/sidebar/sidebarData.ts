export interface SidebarMenu {
  label: string;
  href?: string;
  children?: SidebarMenu[];
}

export interface SidebarCTA {
  text: string;
  href: string;
}

export interface SidebarContactItem {
  text: string;
  href: string;
}

export interface SidebarContact {
  phone: SidebarContactItem;
  email: SidebarContactItem;
  address: string;
}

export interface SidebarSocial {
  label: string;
  href: string;
}

export interface SidebarData {
  logo: string;
  menus: SidebarMenu[];
  closeIcon: string;
  title: string;
  description: string;
  cta: SidebarCTA;
  ctaIcon: string;
  gallery: string[];
  contact: SidebarContact;
  social: SidebarSocial[];
  footerLogo: string;
}

const sidebar: SidebarData = {

  logo: "/images/logo.svg",
  menus: [
    {
      label: "Subjects", 
      href: "/subjects-we-offer"
      // children: [
      //   { label: "Creative Agency", href: "/creative-agency" },
      //   { label: "Design Agency", href: "/design-agency" },
      //   { label: "Digital Agency", href: "/digital-agency" },
      //   { label: "AI Agency", href: "/ai-agency" },
      //   { label: "Marketing Agency", href: "/marketing-agency" },
      // ],
    },
    {
      label: "Grades",
      href: "/grades"
      // children: [
      //   { label: "About Us", href: "/ai-agency/about" },
      //   {
      //     label: "Service",
      //     children: [
      //       { label: "Services", href: "/ai-agency/services" },
      //       { label: "Service Details", href: "/ai-agency/service-details" },
      //     ],
      //   },
      //   {
      //     label: "Portfolio Pages",
      //     children: [
      //       { label: "Portfolio", href: "/ai-agency/portfolio" },
      //       { label: "Portfolio 02", href: "/ai-agency/portfolio-02" },
      //       { label: "Portfolio 03", href: "/ai-agency/portfolio-03" },
      //       { label: "Portfolio Details", href: "/ai-agency/portfolio-details" },
      //     ],
      //   },
      //   { label: "Team", href: "/ai-agency/team" },
      //   {
      //     label: "Blog Pages",
      //     children: [
      //       { label: "Blog", href: "/ai-agency/blog" },
      //       { label: "Blog Grid", href: "/ai-agency/blog-grid" },
      //       { label: "Blog Details", href: "/ai-agency/blog-details" },
      //     ],
      //   },
      //   { label: "FAQ", href: "/ai-agency/faq" },
      //   { label: "Contact", href: "/ai-agency/contact" },
      // ],
    },
    {
      label: "Pricing",
      href: "/pricing"
      // children: [
      //   { label: "Portfolio", href: "/ai-agency/portfolio" },
      //   { label: "Portfolio Details", href: "/ai-agency/portfolio-details" },
      // ],
    },
    {
      label: "Tutors",
      href: "/tutors"
      // children: [
      //   { label: "Portfolio", href: "/ai-agency/portfolio" },
      //   { label: "Portfolio Details", href: "/ai-agency/portfolio-details" },
      // ],
    },
    { label: "Blog", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
  ],
  closeIcon: "fas fa-times",
  title: "",
  description:
    "",
  cta: {
    text: "Let’s Connect",
    href: "/ai-agency/contact",
  },
  ctaIcon: "fa-solid fa-arrow-right",
  gallery: [
    // "/assets/imgs/gallery/image-48.webp",
    // "/assets/imgs/gallery/image-49.webp",
    // "/assets/imgs/gallery/image-50.webp",
    // "/assets/imgs/gallery/image-51.webp",
  ],
  contact: {
    phone: { text: "+1244-665-4852", href: "tel:+1244-665-4852" },
    email: { text: "info@eduglob.com", href: "mailto:info@eduglob.com" },
    address: "410 Sandtown, California 56044, USA",
  },
  social: [
    { label: "FB", href: "#" },
    { label: "LN", href: "#" },
    { label: "IN", href: "#" },
    { label: "BE", href: "#" },
  ],
  footerLogo: "/assets/imgs/logo/logo-6.png",
};

export default sidebar;
