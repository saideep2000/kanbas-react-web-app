function CourseItem({
    course,
    deleteCourse,
    setCourse
 }) {
  return (
    <>
        <div key={course.id} className="d-grid gap-2 d-md-block">
            <button className="btn btn-warning me-md-2" onClick={() => setCourse(course)} >Edit</button>
            <button className="btn btn-danger" onClick={() => deleteCourse(course.number)} >Delete</button>
        </div>
        
    </>
  )
}
export default CourseItem;