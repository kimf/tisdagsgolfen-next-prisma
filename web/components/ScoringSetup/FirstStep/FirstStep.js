import { Fragment } from "react";

import CourseList from "./CourseList";
import GameSettings from "./GameSettings";
import ScoringSessionList from "./ScoringSessionList";

import Query from "../../shared/Query";
import scoringSessionsAndCoursesQuery from "../../../graphql/queries/scoringSessionsAndCoursesQuery";

const FirstStep = ({ setData, localState }) => (
  <Query query={scoringSessionsAndCoursesQuery}>
    {({ scoringSessions, courses }) => (
      <Fragment>
        <ScoringSessionList scoringSessions={scoringSessions} />
        <GameSettings setData={setData} {...localState} />
        <CourseList
          courses={courses}
          selectedCourseId={localState.courseId}
          setSelectedCourse={course => setData({ courseId: course.id })}
        />
      </Fragment>
    )}
  </Query>
);

export default FirstStep;
