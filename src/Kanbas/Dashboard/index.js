import { Link } from "react-router-dom";
import db from "../Database";
import './dashboard.css'

function Dashboard() {
  const courses = db.courses;
  return (
    <div class="wd-scrollable">
        <div class="wd-account-main-page">
                <div class="container-fluid">
                    <div class="row account-header">
                        <div class = "col col-sm-4  wd-dashboard-header">Dashboard</div>
                    </div>
                    <div class="row">
                        <hr class="wd-custom-divider" />
                    </div>
                    <div class="wd-main-dashboard container-fluid">
                        <div class="row">
                            <h3 class="wd-dashboard-sub-header">Published Courses(24)</h3>
                        </div>
                    </div>
                    <div class="row">
                        <hr class="wd-custom-divider2" />
                    </div>
                    <div className="row">
                        {courses.map((course) => (
                            <div key={course._id} className="col col-12 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center mb-3 mt-3">
                                <div className="card wd-dashboard-course-card">
                                    <div className="wd-card-image-container">
                                        <div className="float-end">
                                            <div className="wd-course-card-ellipses">
                                                <i className="fa-solid fa-ellipsis-vertical white course-edit-icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title wd-card-header">
                                            <Link to={`/Kanbas/Courses/${course._id}`} style={{textDecoration: 'none'}}>
                                                {course.name}<span className="wd-red">...</span>
                                            </Link>
                                        </h6>
                                        <p className="card-subtitle text-body-secondary wd-text-grey">{course.number}</p>
                                        <p className="card-text wd-card-text">{course.term}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    </div>
  );
}
export default Dashboard;