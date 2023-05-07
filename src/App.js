import './App.css'
import React from 'react'
import { Routes,Route,BrowserRouter,Link} from 'react-router-dom'
import NotFound from './pathFail';

//======================================================
import StructureWebUI from './Nisit_UI/StructureWebUI';

import Student_ListScholarship from './Nisit_UI/Student_ListScholarship';
import Student_RegisterScholarship from './Nisit_UI/Student_RegisterScholarship';
import Student_Inform from './Nisit_UI/Student_Inform';
import Student_Status from './Nisit_UI/Student_Status';
import Student_Schedule from './Nisit_UI/Student_Schedule';
import Student_Contact from './Nisit_UI/Student_Contact';
import Student_Help from './Nisit_UI/Student_Help';

import ViewInform from './components/form/ViewInform';
import FormUpload from './components/form/FormUpload';
//======================================================
import Admin_Dashboard from './Admin_UI/Admin_Dashboard';
import Admin_Graph from './Admin_UI/Admin_Graph';
import Admin_Output from './Admin_UI/Admin_Output';
import Admin_History from './Admin_UI/Admin_History';


import Admin_Managescholarship from './Admin_UI/Admin_Managescholarship';
import Admin_Schedule from './Admin_UI/Admin_Schedule';
import Admin_StudentInform from './Admin_UI/Admin_StudentInform';
import Admin_Results from './Admin_UI/Admin_Results';
import Admin_StudentStatus from './Admin_UI/Admin_StudentStatus';
import Admin_Statuslook from './Admin_UI/Admin_Statuslook';
import Admin_EditScholarship from './Admin_UI/Admin_EditScholarship';
import Admin_AddSourceScholarship from  './Admin_UI/Admin_AddSourceScholarship';
import Admin_AddScholarship from './Admin_UI/Admin_AddScholarship'
import Admin_Ranking from './Admin_UI/Admin_Ranking'


import Admin_WeightPoint from './Admin_UI/Admin_WeightPoint';
import Admin_EditSourceScholarship from './Admin_UI/Admin_EditSourceScholarship';


import Login_nisit from './Login/Login_nisit';
import Login_admin from './Login/Login_admin';
import Login_commitee from './Login/Login_commitee';
import Login_All from './Login/Login_All';
import {AuthProvider} from './Login/Authenticate';


import Admin_AddSchedule_add from './Admin_UI/Admin_Schedule';
import Test from './Nisit_UI/Test';
import Test2 from './Nisit_UI/Test2';

import TestAxios from './TestAxios'; //Test Axios เฉยๆ
import TestLoginGoogle from './TestLoginGoogle'; //Test google เฉยๆ

import StudentSchola2 from './components/newpost/StudentSchola2';


//commitee
import Commitee_ListScholarship from './Commitee_UI/Commitee_ListScholarship'
import Commitee_Score from './Commitee_UI/Commitee_Score'
import Commitee_Vote from './Commitee_UI/Commitee_Vote'
import Commitee_Schedule from './Commitee_UI/Commitee_Schedule'
import Commitee_History from './Commitee_UI/Commitee_History'

//dowload
import FileDownloader from './Commitee_UI/FileDownloader'
//Ranking


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
        
          {/*<Route path="/Login_nisit" element={<Login_nisit/>} />
          <Route path="/Login_admin" element={<Login_admin/>} />
          <Route path="/Login_commitee" element={<Login_commitee/>} />*/}
          <Route path="/Login_all" element={<Login_All/>} />

          <Route path="/" element={<Login_All/>} />
          {/*<Route path="/testAxios" element={<TestAxios/>} /> {/* Test Axios GET */}
          {/*<Route path="/testLoginGoogle" element={<TestLoginGoogle/>} /> {/* Test Google */}
        
          <Route path="/ListScholarship" element={<Student_ListScholarship/>} />
          <Route path="/RegisterScholarship" element={<Student_RegisterScholarship/>} />
          <Route path="/RegisterScholarship/uploadFile/:scholar" element={<FormUpload/>}/>

          <Route path="/StudentInform" element={<Student_Inform/>} />
          <Route path="/StudentInform/view" element={<ViewInform/>} />
          <Route path="/StudentStatus" element={<Student_Status/>} />
          <Route path="/StudentSchedule" element={<Student_Schedule/>} />
          <Route path="/Contact" element={<Student_Contact/>} />
          <Route path="/Help" element={<Student_Help/>} />

          {/*<Route path="/Admin_StudentInform/:scholar/:studentID" element={<Admin_StudentInform mode={1} />} />*/}
          <Route path="/Admin_StudentInform" element={<Admin_StudentInform/>} />
          <Route path="/Admin_Results" element={<Admin_Results/>} />
          <Route path="/Admin_StudentStatus" element={<Admin_StudentStatus/>}/>
          <Route path="/Admin_StudentStatus/statuslook/:register_id" element={<Admin_Statuslook/>}/>
          <Route path="/Admin_Dashboard" element={<Admin_Dashboard/>} />
          <Route path="/Admin_Graph" element={<Admin_Graph/>} />
          <Route path="/Admin_Output" element={<Admin_Output/>} />
          <Route path="/Admin_History" element={<Admin_History/>} />
          <Route path="/Admin_Managescholarship" element={<Admin_Managescholarship/>} />
          <Route path="/Admin_Managescholarship/add" element={<Admin_AddScholarship/>} />
          <Route path="/Admin_Managescholarship/SourceScholarship" element={<Admin_AddSourceScholarship/>}/>
          <Route path="/Admin_Managescholarship/WeightPoint" element={<Admin_WeightPoint/>} />
          <Route path="/Admin_EditScholarship/:idEditScho" element={<Admin_EditScholarship/>} />
          <Route path="/Admin_EditSourceScholarship/:idEditSource" element={<Admin_EditSourceScholarship/>} />
          <Route path="/Admin_Ranking/:scholar_id" element={<Admin_Ranking/>}/>
          <Route path="/Admin_Schedule" element={<Admin_Schedule/>}/>


          <Route path="/Commitee_ListScholarship" element={<Commitee_ListScholarship/>}/>
          <Route path="/Commitee_Score" element={<Commitee_Score/>}/>
          <Route path="/Commitee_Score/vote/:register_id" element={<Commitee_Vote/>}/>
          <Route path="/Commitee_Schedule" element={<Commitee_Schedule/>}/>
          <Route path="/Commitee_History" element={<Commitee_History/>}/>

          {/*<Route path="/StudentSchola2" element={<StudentSchola2/>}/>*/}
          {/*<Route path="/Test" element={<Test/>}/>*/}
          {/*<Route path="/Test2" element={<Test2/>}/>*/}
          {/*<Route path="/FileDownloader" element={<FileDownloader/>}/>
          
          {/* <Route path="/Commitee_ListScholarship" element={<Commitee_ListScholarship/>}/> 
           {<Route path="/FileDownloader" element={<FileDownloader/>}/> 

          Admin_StudentStatus Admin_StudentStatus
      
          22
          <Route path="/Register" element={<Regster/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/TotalCapital" element={<TotalCapital/>} />
          <Route path="/Details/:status" element={<Details/>} />
          <Route path="/UserStatus" element={<UserStatus/>} />
          <Route path="/Introduction" element={<Introduction/>} />
          <Route path="/Profile" element={<Profile/>} />*/}
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    
    </AuthProvider>
  );
}

export default App;
