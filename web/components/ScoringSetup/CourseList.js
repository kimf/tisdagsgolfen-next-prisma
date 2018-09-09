const CourseList = ({ courses, selectedCourse, setSelectedCourse }) => (
  <div>
    <h3>Vilken bana?</h3>
    <ul>
      {selectedCourse ? (
        <li
          onClick={() => setSelectedCourse(null)}
          style={{ backgroundColor: "#feb" }}
        >
          🤷
          <strong>
            {selectedCourse.club} - {selectedCourse.name}
          </strong>
        </li>
      ) : (
        courses.map((course, index) => (
          <li key={course.id} onClick={() => setSelectedCourse(course)}>
            {course.club} - {course.name}
          </li>
        ))
      )}
    </ul>
  </div>
);

export default CourseList;
