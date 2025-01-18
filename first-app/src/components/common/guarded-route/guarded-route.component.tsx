import React, { useContext } from "react";
import { AuthContext } from "../../../providers/authProvider";
import { Link } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
}
const Guarded = (props: IProps) => {
  const { user } = useContext(AuthContext);

  if (user === null) {
    return (
      <div>
        <h3>You must be logged in to see this screen</h3>
        <Link to="/login">Login in here!</Link>
      </div>
    );
  }

  return props.children;
};
export default Guarded;
