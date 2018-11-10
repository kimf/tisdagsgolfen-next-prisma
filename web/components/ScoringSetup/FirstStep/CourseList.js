const CourseList = ({ courses, selectedCourseId, setSelectedCourse }) => (
  <div>
    <h3>Vilken bana?</h3>
    <ul>
      {courses.map((course, index) => {
        const isSelected = selectedCourseId === course.id;
        return (
          <li
            key={course.id}
            onClick={() => setSelectedCourse(course)}
            style={{
              backgroundColor: isSelected ? "#feb" : "#fff",
              fontWeight: isSelected ? "bold" : "normal"
            }}
          >
            {isSelected && "🤷"}
            {course.club} - {course.name}
          </li>
        );
      })}
    </ul>
  </div>
);

export default CourseList;
