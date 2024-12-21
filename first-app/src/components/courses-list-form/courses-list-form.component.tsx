import { useState } from "react";

interface IProps {
    value: string []
    onSubmit: (list: string[]) => void;
  
}
const CoursesListForm = (props : IProps) => {
  const [courseList, setCourseList] = useState<string[]>(props.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCourse = event.currentTarget["courseName"].value;
    const newList = [...courseList, newCourse];
    setCourseList(newList);
    props.onSubmit(newList)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cName">Enter Course: </label>
        <input id="cNAme" type="text" name="courseName" />
        <input type="submit" value="Add Course" />
      </form>
      <ul>
        <li>
          {courseList.map((course, index) => (
            <li key={course + index}>{course}</li>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default CoursesListForm;
