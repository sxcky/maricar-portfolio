import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
];

const services = [
  {
    title: "Video Editing",
    icon: backend,
  },
  {
    title: "Photography",
    icon: mobile,
  },
  {
    title: "Adobe Photoshop",
    icon: starbucks,
  },
  {
    title: "Adobe Lightroom",
    icon: backend,
  },
  {
    title: "Microsoft Office",
    icon: creator,
  },
  {
    title: "Google Docs",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    URL: "https://www.facebook.com",
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C++",
    icon: redux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Chief of Staff",
    company_name: "Tier One Entertainment",
    icon: tesla,
    iconBg: "white",
    date: "January 2022 - Present",
    points: [
      "Supports executives in their roles.",
      "Take over small responsibilities and handle other day-to-day items while attending meetings on behalf of the executive leader to write notes for them and lead strategic planning processes across an organization.",
    ],
  },
  {
    title: "Operations Manager",
    company_name: "Lazaro Tirona Apartment & Transportation",
    icon: tesla,
    iconBg: "white",
    date: "May 2013 - Present",
    points: [
      "Manages clients and potential clients inquiry by email and phone calls.",
      "Organize financial reports and database.",
      "Coordinated with staff and other agencies.",
    ],
  },
  {
    title: "Virtual Assistant",
    company_name: "Upwork (Freelance)",
    icon: tesla,
    iconBg: "white",
    date: "June 2009 - Present",
    points: [
      "Virtual Administrative Support",
      "Search Engine Optimization (SEO)",
      "Support Services",
      "Technical Support",
    ],
  },
  {
    title: "Operation Manager",
    company_name: "Eventking Corporation",
    icon: tesla,
    iconBg: "white",
    date: "October 2018 - February 2022",
    points: [
      "Designed and implemented strategies to manage incidents which included troubleshooting, malfunctions, and resolving causes of issues.",
      "Collaborated closely with clients to discuss event details including venue selection, budgets, requirements, setup, and timelines.",
      "Supervised teams of onsite staff in positions providing services for several events.",
    ],
  },
  {
    title: "Account Executive",
    company_name: "Eventking Corporation",
    icon: tesla,
    iconBg: "white",
    date: "November 2015 - October 2018",
    points: [
      "Supervised registrations for various events.",
      "Managed t he company's email and communicated with clients.",
    ],
  },
  {
    title: "Executive Assistant to Managing Director",
    company_name: "Neuman & Mueller Philippines Inc.",
    icon: tesla,
    iconBg: "white",
    date: "February 2014 - October 2016",
    points: [
      "Managed day-to-day operations in the President's office.",
      "Made all arrangements for meetings and events for senior executives, managers and board of directors.",
      "Communicated with customers, guests, and employees regarding travel arrangements.",
      "Executed standard procedures in recruitment and time keeping.",
      "Oversaw POP materials, process sponsorship, purchase and events.",
    ],
  },
  {
    title: "Sales Assistant",
    company_name: "88 DB Philippines Inc | Manila",
    icon: tesla,
    iconBg: "white",
    date: "April 2013 - December 2013",
    points: [
      "Managed clients inquiries through email and call.",
      "Organized administrative tasks.",
    ],
  },
  {
    title: "Client Service Associate (Level 2)",
    company_name: "Banco De Oro, Unibank Inc.",
    icon: tesla,
    iconBg: "white",
    date: "June 2012 - October 2012",
    points: [
      "Maximize client support by providing accurate, efficient and timely processing of over-the-counter transactions pertaining to deposits, withdrawing, payments, foreign currencies and other miscellaneous transactions.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "LinkedIn",
    name: "Maricar Tirona",
    designation: "Virtual Assistant",
    company: "",
    image: shopify,
    source_code_link: "https://www.linkedin.com/in/maricar-tirona/",
  },
  {
    testimonial: "UpWork",
    name: "Maricar T.",
    designation: "Virtual Assistant",
    company: "",
    image: git,
    source_code_link: "https://www.upwork.com/freelancers/~013dd0f24f863444aa",
  },
  {
    testimonial: "GMail",
    name: "maricart@gmail.com",
    designation: "0912 345 6789",
    company: "",
    image: docker,
    source_code_link:
      "https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new",
  },
];

const projects = [
  {
    name: "maricar1",
    description: "",
    tags: [],
    image: jobit,
  },
  {
    name: "maricar2",
    description: "",
    tags: [],
    image: tripguide,
  },
  {
    name: "maricar3",
    description: "",
    tags: [],
    image: carrent,
  },
];

export { services, technologies, experiences, testimonials, projects };
