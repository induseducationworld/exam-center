import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Home/Header";
import Register from "./screen/Register";
import Login from "./screen/Login";
import QuestionList from "./screen/QuestionList";
import QuestionCreate from "./screen/QuestionCreate";
import TestCreate from "./screen/TestCreate";
import StudentRegistered from "./screen/StudentRegistered";
import TestPaper from "./screen/TestPaper";
import Instruction from "./components/Instruction";
import SupervisorList from "./screen/SupervisorList";
import SupervisorReqList from "./screen/SupervisorReqList";
import StudentResult from "./screen/StudentResult";
import EmailNotification from "./screen/EmailNotification";
import Snapshots from "./screen/Snapshots";
import HomeScreen from "./screen/HomeScreen";
import TestConductedList from "./screen/TestConductedList";
import TestNotConductedList from "./screen/TestNotConductedList";
import StudentPrevTest from "./screen/StudentPrevTest";
import StudentUpcomingTest from "./screen/StudentUpcomingTest";
import Audio from "./screen/Audio";
import Profile from "./screen/Profile";
import SupervisorGroup from "./screen/SupervisorGroup";
import StudentGroup from "./screen/StudentGroup";
import TestSubmitted from "./screen/TestSubmitted";
import GroupDetails from "./screen/GroupDetails";
import DeleteMedia from "./screen/DeleteMedia";
import AssignmentNotConductedList from "./screen/AssignmentNotConducted";
import AssignmentConductedList from "./screen/AssignmentConducted";
import StudentPrevAssignment from "./screen/StudentPrevAssignment";
import StudentUpcomingAssignment from "./screen/StudentUpcomingAssignment";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/questions" element={<QuestionList />} exact />
        <Route path="/pastTest" element={<StudentPrevTest />} />
        <Route path="/upcomingTest" element={<StudentUpcomingTest />} />
        <Route path="/past-assignment" element={<StudentPrevAssignment />} />
        <Route
          path="/upcoming-assignment"
          element={<StudentUpcomingAssignment />}
        />

        <Route path="/supervisor/groups/:id" element={<GroupDetails />} exact />
        <Route path="/supervisor/groups" element={<SupervisorGroup />} />
        <Route path="/student/groups/:id" element={<GroupDetails />} exact />
        <Route path="/student/groups" element={<StudentGroup />} />

        <Route path="/questions/create" element={<QuestionCreate />} />
        <Route path="/tests/create" element={<TestCreate />} />
        <Route path="/tests/edit/:testId" element={<TestCreate />} />
        <Route
          path="/tests/notConducted"
          element={<TestNotConductedList />}
          exact
        />
        <Route
          path="/assignment/notConducted"
          element={<AssignmentNotConductedList />}
          exact
        />
        <Route path="/tests/conducted" element={<TestConductedList />} exact />
        <Route
          path="/assignment/conducted"
          element={<AssignmentConductedList />}
          exact
        />
        <Route
          path="/student/registration/test/:id/emailsent"
          element={<EmailNotification />}
        />
        <Route
          path="/student/registration/test/:id"
          element={<StudentRegistered />}
        />
        <Route path="/student/test/result" element={<StudentResult />} />
        <Route path="/student/test/start" element={<TestPaper />} />
        <Route path="/student/test/snapshots" element={<Snapshots />} />
        <Route path="/student/test/submitted" element={<TestSubmitted />} />
        <Route path="/student/test/audio" element={<Audio />} />
        <Route path="/student/test" element={<Instruction />} exact />
        <Route path="/supervisor/request" element={<SupervisorReqList />} />
        <Route path="/supervisor/delete" element={<DeleteMedia />} />
        <Route path="/supervisor" element={<SupervisorList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
