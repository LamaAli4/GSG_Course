import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");

  const addList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(title);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={title}
          placeholder="Type Todo here..."
          onChange={handleChange}
        />
        <label>
          <input type="checkbox" />
          Mark as urgent
        </label>
        <button type="submit" onClick={addList}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Form;
