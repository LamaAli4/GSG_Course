import { useState } from "react";
import "./add-form.css";

const AddForm = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <label htmlFor="name">Student Name: </label>
        <input
          id="name"
          type="text"
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="age">Student Age: </label>

        <input
          id="age"
          type="number"
          min={17}
          max={40}
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
        />

        <input />
      </div>
    </div>
  );
};

export default AddForm;
