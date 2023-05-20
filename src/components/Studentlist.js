import React from "react";
import Student from "./Student";

const StudentList = () => {
  const StudentArr = Student.map((student) => (
    <li key={student.id}>
      <h2>
        Hello I'm {student.Name}. I enjoy studying {student.Subject}
      </h2>
    </li>
  ));

  return <ul>{StudentArr}</ul>;
};

export default StudentList;
