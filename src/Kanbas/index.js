import KanbasNavigation from "./KanbasNavigation/KanbasNavigation";
import "./KanbasNavigation/index.css"
import {Navigate, Routes, Route} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {React, useState} from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({ title: "Learn" });

    const addCourse = (course) => {
        const newCourse = [ ...courses, { ...course,
          id: new Date().getTime().toString() }];
        setCourses(newCourse);
        setCourse({name: "", number: "", startDate: "", endDate: ""});
      };

      const updateCourse = (course) => {
        const newCourses = courses.map((item) =>
          (item._id === course._id ? course : item));
        setCourses(newCourses);
        setCourse({name: "", number: "", startDate: "", endDate: ""});
      };
      const deleteCourse = (number) => {
        const newCourses = courses.filter((course) => course.number !== number);
        setCourses(newCourses);
      };



    return (
            <Provider store={store}>
              <div className="d-flex h-100">
              <KanbasNavigation/>
                  <div className="w-100">
                      <Routes>
                          <Route path="/" element={<Navigate to={"Dashboard"}/>}/>
                          <Route path="Account" element={<h1>Account</h1>} />
                          <Route path="Dashboard" element={
                          <Dashboard
                              courses={courses}
                              course={course}
                              setCourse={setCourse}
                              addCourse={addCourse}
                              deleteCourse={deleteCourse}
                              updateCourse={updateCourse}/>
                          } />
                          <Route path="Courses/:courseId/*" element={
                          <Courses
                              courses = {courses}
                          />} />
                      </Routes>
                  </div>
              </div>
            </Provider>
    );
}

export default Kanbas;