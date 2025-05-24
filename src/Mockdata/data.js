const NavbarMenu = [
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
      { title: "Principal Message", link: "/principal/message" },
      {
        title: "School-Gallary",
        link: "/about-gallery",
      },
      { title: "Job-Vacancy", link: "/about/mission" },
      { title: "RTE", link: "/about/rte" },
    ],
  },
  {
    id: 3,
    title: "Admission",
    link: "#",
    submenu: [
      { title: "Admission Notification's", link: "/admission/Admission" },
      { title: "Online Admission Form", link: "/admission/form" },
      { title: "Parents Enquiry Form", link: "/admission/parents" },
    ],
  },
  {
    id: 4,
    title: "Mandatory Details",
    link: "#",
    submenu: [
      { title: "Fee Structure", link: "/Fee/Mandatory Details" },
      { title: "Teaching Staff", link: "/staff/Mandatory Details" },
      { title: "Text-Books", link: "/textbooks/Mandatory Details" },
      { title: "Curriculum", link: "/curriculam/Mandatory Details" },
      { title: "Infrastructure", link: "/infrastrucure/Mandatory Details" },
      { title: "School-Circular", link: "/schoolcircular/Mandatory Details" },
      { title: "Academic-Calendar", link: "/calender/Mandatory Details" },
      { title: "Student-Details", link: "/student/Mandatory Details" },
      { title: "Online-Fee-Payment", link: "/payment/Mandatory Details" },
      { title: "Upload-Fee-Receipt", link: "/recipt/Mandatory Details" },
    ],
  },
  {
    id: 5,
    title: "Transfer-certificate",
    link: "#",
    submenu: [
      { title: "Get-Certificate", link: "/certificate/Transfer-certificate" },
    ],
  },
  {
    id: 6,
    title: "Help",
    link: "#",
    submenu: [
      { title: "Feedback-form", link: "/feedbackform/Help" },
      { title: "Contact-us", link: "/contact/Help" },
    ],
  },
];
export default NavbarMenu;
