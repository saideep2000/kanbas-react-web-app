import { Link, useParams, useLocation } from "react-router-dom";
import '../index.css'

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div class="wd-scrollable">
        <div class="wd-account-main-page">
            <div class="container-fluid">
                <div class="row align-items-start">
                    <div class="col-auto">
                      <i class="fa-solid fa-bars wd-custom-hamburger"></i>
                    </div>
                    <div class="col">
                      {/* <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb"> */}
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item wd-breadcrumb-header"><a href="index.html">CS5610.11744.202310</a></li>
                          <li class="breadcrumb-item wd-breadcrumb-header-active" aria-current="page">Home</li>
                        </ol>
                      {/* </nav> */}
                    </div>
                </div>
            </div>
            <div class="row">
                    <hr class="wd-custom-divider" />
            </div>
            <div class="row">
                <div class="col col-sm-2">
                    <div class="wd-account-navigation">
                        <div class="wd-navigation-element"><div class="wd-note">202310_2 Fall 2022...</div>
                        <div class="wd-navigation-element wd-navigation-element-active"><a href="index.html">Home</a></div>
                        <div class="wd-navigation-element"><a href="#">Modules</a></div>
                        <div class="wd-navigation-element"><a href="#">Piazza</a></div>
                        <div class="wd-navigation-element"><a href="#">Zoom Meetings</a></div>
                        <div class="wd-navigation-element"><a href="assignments/index.html">Assignments</a></div>
                        <div class="wd-navigation-element"><a href="#">Quizzes</a></div>
                        <div class="wd-navigation-element"><a href="grades.html">Grades</a></div>
                        <div class="wd-navigation-element"><a href="#">People</a></div>
                        <div class="wd-navigation-element"><a href="#">Discussions</a></div>
                        <div class="wd-navigation-element"><a href="#">Announcements</a></div>
                        <div class="wd-navigation-element"><a href="#">Pages</a></div>
                        <div class="wd-navigation-element"><a href="#">Files</a></div>
                        <div class="wd-navigation-element"><a href="#">Rubrics</a></div>
                        <div class="wd-navigation-element"><a href="#">Outcomes</a></div>
                        <div class="wd-navigation-element"><a href="#">Collaborations</a></div>
                        <div class="wd-navigation-element"><a href="#">Syllabus</a></div>
                        <div class="wd-navigation-element"><a href="setting/course_details.html">Settings</a></div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default CourseNavigation;