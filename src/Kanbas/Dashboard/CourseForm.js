
function CourseForm({
    course,
    setCourse,
    addCourse,
    updateCourse
}) {
  return (
    <>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <input className = "rounded" value={course.name} style={{width: '300px'}} placeholder="Course Name"
                    onChange={ (e) => setCourse({ ...course, name: e.target.value }) }
            ></input>
            <input className = "rounded" value={course.number} placeholder="Course Number"
                    onChange={ (e) => setCourse({ ...course, number: e.target.value }) }
            ></input>
            <input id="startDate" value={course.startDate} class="form-control rounded" type="date" placeholder="startDate" style={{width: '450px'}}
                    onChange={ (e) => setCourse({ ...course, startDate: e.target.value }) }
            />
            <input id="endDate" value={course.endDate} class="form-control rounded" type="date" placeholder="endDate" style={{width: '450px'}}
                    onChange={ (e) => setCourse({ ...course, endDate: e.target.value }) }
            />
            <button className="btn btn-success" onClick={() => addCourse(course)}>Add</button>
            <button className="btn btn-primary" onClick={() => updateCourse(course)}>Update</button>
        </div>
    </>
  )
}

export default CourseForm;
