import { useEffect, useRef, useState } from "react";
import "./App.css";
import { IStudent } from "./types";

import Student from "./components/student/student.component";
import AddForm from "./components/add-form/add-form.component";
import useLocalStorage from "./hooks/localStorage.hook";

function App() {
  const [studentsList, setStudentsList] = useLocalStorage<IStudent[]>(
    "students-list",
    []
  );
  const [totalAbsents, setTotalAbsents] = useState(0);
  const lastStdRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const totalAbs = studentsList.reduce((prev, cur) => prev + cur.absents, 0);
    setTotalAbsents(totalAbs);
  }, [studentsList]);

  const removeFirst = () => {
    const newList = [...studentsList];
    newList.shift(); // removes the first item
    setStudentsList(newList);
  };

  const handleAbsentChange = (id: string, change: number) => {
    setTotalAbsents(totalAbsents + change);
    setStudentsList(
      studentsList.map((std) =>
        std.id === id ? { ...std, absents: std.absents + change } : std
      )
    );
  };

  const handleAddStudent = (newStudent: IStudent) => {
    setStudentsList([newStudent, ...studentsList]);
  };

  const scrollToLast = () => {
    if (lastStdRef.current) {
      lastStdRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const h1Style = { color: "#69247C", fontSize: "24px" };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <AddForm className="addForm" onSubmit={handleAddStudent} />
      <div className="stats">
        <button onClick={removeFirst}>POP Student</button>
        <button onClick={scrollToLast}>Scroll To Last</button>
        <b style={{ fontSize: "12px", fontWeight: 100, color: "gray" }}>
          Total Absents {totalAbsents}
        </b>
      </div>
      {studentsList.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          age={student.age}
          absents={student.absents}
          isGraduated={student.isGraduated}
          coursesList={student.coursesList}
          onAbsentChange={handleAbsentChange}
        />
      ))}
      <div ref={lastStdRef}></div>
    </div>
  );
}

export default App;
