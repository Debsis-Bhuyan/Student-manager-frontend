import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentPofile from "./component/student/StudentProfile";
import NavBar from "./component/common/NavBar";
import StudentsView from "./component/student/StudentViews";
import Home from "./component/Home";

function App() {
  return (
    <main className="  ">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-students" element={<StudentsView />}></Route>
          <Route exact path="/add-students" element={<AddStudent />}></Route>
          <Route
            exact
            path="/edit-student/:id"
            element={<EditStudent />}
          ></Route>
          <Route
            exact
            path="/student-profile/:id"
            element={<StudentPofile />}
          ></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
