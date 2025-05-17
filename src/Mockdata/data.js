import { title } from "framer-motion/client";

export const NavbarMenu = [
  {
    id: 1,
    title: "home",
    link: "/",
  },
  {
    id: 2,
    title: "About School",
    link: "#",
    submenu: [
      { title: "Faculty", link: "/about/faculty" },
      { title: "Our Vision", link: "/about/vision" },
      { title: "Our Mission", link: "/about/mission" },
      { title: "Achievements", link: "/about/achievements" },
      { title: "Infrastructure", link: "/about/infrastructure" },
      { title: "Principal's Message", link: "/about/principal" },
    ],
  },
  {
    id: 3,
    title: "Admission",
    link: "#",
  },
  {
    id: 4,
    title: "Admissions",
    link: "#",
  },
  {
    id: 5,
    title: "Faculty",
    link: "#",
  },
  {
    id: 6,
    title: "Extra Co-Curriculam",
    link: "#",
     submenu: [
      { title: "Faculty", link: "/about/faculty" },
      { title: "Our Vision", link: "/about/vision" },
      { title: "Our Mission", link: "/about/mission" },
      { title: "Achievements", link: "/about/achievements" },
      { title: "Infrastructure", link: "/about/infrastructure" },
      { title: "Principal's Message", link: "/about/principal" },
    ],
  },
];
