import { useState } from "react";

interface IProps {
  value: string[]
  onSubmit: (list: string[]) => void;
}
const CoursesListForm = (props: IProps) => {
  const [courseList, setCoursesList] = useState<string[]>(props.value);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCourse = event.currentTarget["courseName"].value;
    const newList = [...courseList, newCourse];
    setCoursesList(newList);
    props.onSubmit(newList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cName">Enter Course: </label>
        <input id="cName" type="text" name="courseName" />
        <input type="submit" value="Add course" />
      </form>
      <ul>
        {courseList.map((course, index) => {
          return <li key={course + index}>{course}</li>;
        })}
      </ul>
    </div>
  );
};

export default CoursesListForm;
