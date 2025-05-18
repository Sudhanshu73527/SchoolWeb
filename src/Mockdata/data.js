export const NavbarMenu = [
  {
    id: 1,
    title: "home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "#",
    submenu: [
      { title: "About School", link: "/about/school" },
      { title: "Mission & Vision", link: "/about/vision" },
      { title: "Principal Message", link: "/about/mission" },
      {
        title: "School-Gallary",
        link: "/about/about-gallery",
        submenu: [
          { title: "Image Gallery", link: "/about/gallery/images" },
          { title: "Video Gallery", link: "/about/gallery/videos" },
        ],
      },
      { title: "Job-Vacancy", link: "/about/mission" },
    ],
  },
  {
    id: 3,
    title: "Admission",
    link: "#",
    submenu: [
      { title: "Admission Notification's", link: "/admission/Admission" },
      { title: "Online Admission Form", link: "/admission/form" },
    ],
  },
  {
    id: 4,
    title: "Mandatory Details",
    link: "#",
    submenu: [
      { title: "Fee Structure", link: "/admission/Admission" },
      { title: "Teaching Staff", link: "/admission/form" },
      { title: "Text-Books", link: "/admission/form" },
      { title: "Curriculum", link: "/admission/form" },
      { title: "Infrastructure", link: "/admission/form" },
      { title: "School-Circular", link: "/admission/form" },
      { title: "Academic-Calendar", link: "/admission/form" },
      { title: "Student-Details", link: "/about/mission" },
    ],
  },
  {
    id: 5,
    title: "Transfer-certificate",
    link: "#",
    submenu: [
      { title: "Get-Certificate", link: "/admission/Admission" },
    ],
  },
  {
    id: 6,
    title: "Help",
    link: "#",
    submenu: [
      { title: "Feedback-form", link: "/about/faculty" },
      { title: "Contact-us", link: "/about/vision" },
    ],
  },
];
