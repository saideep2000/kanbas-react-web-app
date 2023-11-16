import axios from "axios";
import KanbasNavigation from "./KanbasNavigation/KanbasNavigation";
import "./KanbasNavigation/index.css"
import {Navigate, Routes, Route} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {React, useState, useEffect} from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);



    const [course, setCourse] = useState({});

    // const addCourse = (course) => {
    //     const newCourse = [ ...courses, { ...course,
    //       id: new Date().getTime().toString() }];
    //     setCourses(newCourse);
    //     setCourse({name: "", number: "", startDate: "", endDate: ""});
    // };


    const addCourse = async () => {
      const response = await axios.post(URL, course);
      setCourses([
        response.data,
        ...courses,
      ]);
      setCourse({name: "", number: "", startDate: "", endDate: ""});
    };


    // const updateCourse = async (course) => {
    //   const newCourses = courses.map((item) =>
    //     (item._id === course._id ? course : item));
    //   setCourses(newCourses);
    //   setCourse({name: "", number: "", startDate: "", endDate: ""});
    // };
    // const deleteCourse = (number) => {
    //   const newCourses = courses.filter((course) => course.number !== number);
    //   setCourses(newCourses);
    // };

    const updateCourse = async (course) => {
      const response = await axios.put(
        `${URL}/${course._id}`,
        course
      );
      setCourses(
        courses.map(c => c._id === course._id ? response.data : c)
        );
      setCourse({name: "", number: "", startDate: "", endDate: ""});
    };
  

    const deleteCourse = async (course) => {
      const response = await axios.delete(
        `${URL}/${course._id}`
      );
      
      // console.log(course._id)
      setCourses(courses.filter(
        (c) => c._id !== course._id));
    }



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