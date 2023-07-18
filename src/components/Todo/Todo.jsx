import { useContext } from "react";
import { DefaultContext } from "@/state";

const Todo = ({ data }) => {
  const state = useContext(DefaultContext);

  const onHandleAdd = () => dispatch({ type: "SET_ADD", payload: "patate" });

  return (
    <div className="padre">
      <h3>{`Name : ${data.todo}`}</h3>
      <p onClick={onHandleAdd}> {state.isAdded} </p>
    </div>
  );
};

export default Todo;
