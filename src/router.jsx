
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Pages/Home.jsx';
import NavbarMenu from './Mockdata/data.js'
import About1 from './Components/About1/About1.jsx';
import MissionVision from './Components/MissionVision/MissionVision.jsx';
import Jobvacency from './Components/Job/Jobvacency.jsx';
import Gallary from './Components/SchoolGallary/Gallary.jsx';
import AdmissionNoti from './Components/Admission/AdmissionNoti.jsx';
import Admissionform from './Components/AdmissionForm/Admissionform.jsx';
import ParentsEnquiry from './Components/ParentsEnquiry/ParentsEnquiry.jsx';
import FeeStructure from './Components/Fee/FeeStructure.jsx';
import TeachingStaff from './Components/TeachingStaff/TeachingStaff.jsx';
import Textbooks from './Components/Textbooks/Textbooks.jsx';
import Curriculam from './Components/Curriculam/Curriculam.jsx';
import Infrastructure from './Components/infrastructure/Infrastructure.jsx';
import Calender from './Components/Academiccalender/Calender.jsx';
import Studentdetails from './Components/Studentdetails/Studentdetails.jsx';
import Certificate from './Components/TransferCerificate/Certificate.jsx';
import Feedbackform from './Components/Feedbackform/Feedbackform.jsx';
import Contact1 from './Components/Contact1/Contact1.jsx';
import Payment from './Components/Onlinepayment/Payment.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path : '/about/school',
        element : <About1/>,

      },
      {
        path : '/about/vision',
        element : <MissionVision />
      },
      {
        path:"/principal/About Us",
        element: <About1/>
      },
      {
        path:"/about/mission",
        element:<Jobvacency/>
      },
      {
        path:"about-gallery",
        element:<Gallary/>
      },
      {
        path:"/admission/Admission",
        element:<AdmissionNoti/>
      },
      {
        path:"/admission/form",
        element:<Admissionform/>
      },
      {
        path:"/admission/parents",
        element:<ParentsEnquiry/>
      },
      {
        path:"/Fee/Mandatory Details",
        element:<FeeStructure/>
      },
      {
        path:"/staff/Mandatory Details",
        element:<TeachingStaff/>
      },
      {
        path:"/textbooks/Mandatory Details",
        element:<Textbooks/>
      },
      {
        path:"/curriculam/Mandatory Details",
        element:<Curriculam/>
      },
      {
        path:"/infrastrucure/Mandatory Details",
        element:<Infrastructure/>
      },
      {
        path:"/calender/Mandatory Details",
        element:<Calender/>
      },
      {
        path:"/student/Mandatory Details",
        element:<Studentdetails/>
      },
      {
        path:"/certificate/Transfer-certificate",
        element:<Certificate/>
      },
      {
        path:"/feedbackform/Help",
        element:<Feedbackform/>
      },
      {
        path:"/contact/Help",
        element:<Contact1/>
      },
      {
        path:"payment/Mandatory Details",
        element:<Payment/>
      }
      // Add more routes here later if needed
    ],
  },
]);

export default router;
