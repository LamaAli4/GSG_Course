import { useState, useEffect } from "react";
import "./App.css";
import { IStudent } from "./types";

import Student from "./components/student/student.component";
import AddForm from "./components/add-form/add-form.component";

function App() {
  const [studentsList, setStudentsList] = useState<IStudent[]>([]);
  const [totalAbsents, setTotalAbsents] = useState(0);
  

  // console.log("Hello from APP component [rendering]!");
  useEffect(() => {
    console.log("Hello from APP component!");
    const storedData: IStudent[] = JSON.parse(
      localStorage.getItem("students-list") || "[]"
    );
    const totalAbs = storedData.reduce((prev, cur) => {
      return prev + cur.absents;
    }, 0);
    setTotalAbsents(totalAbs);
    setStudentsList(storedData);

    return () => {};
  }, []);

  const dataChanged = (newData: IStudent[]) => {
    localStorage.setItem("students-list", JSON.stringify(newData));
  };

  const removeFirst = () => {
    const newList = [...studentsList];
    newList.shift(); // removes the first item
    setStudentsList(newList);
    dataChanged(newList);
  };

  const handleAbsentChange = (id: string, change: number) => {
    setTotalAbsents(totalAbsents + change);
    const newList = studentsList.map((std) =>
      std.id === id ? { ...std, absents: std.absents + change } : std
    );
    setStudentsList(newList);
    dataChanged(newList);
  };

  const handleAddStudent = (newStudent: IStudent) => {
    const newList = [newStudent, ...studentsList];
    setStudentsList(newList);
    dataChanged(newList);
  };

  const h1Style = { color: "#69247C", fontSize: "24px" };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <AddForm className="addForm" onSubmit={handleAddStudent} />
      <div className="stats">
        <button onClick={removeFirst}>POP Student</button>
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
    </div>
  );
}

export default App;
