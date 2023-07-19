import { useContext } from "react";
import { DefaultContext } from "@/state";
import styles from "./Todo.module.scss";

const Todo = ({ data }) => {
  const { state, dispatch } = useContext(DefaultContext);
  const onHandleClick = () => {
    confirm("Are you sure?") && dispatch({ type: "SET_TODO_COMPLETED" });
  };

  // const onHandleAdd = () =>
  //   dispatch({ type: "SET_TODO_COMPLETED", payload: data.id });

  return (
    <div
      className={`${styles.todo} ${data.completed && styles.completed}`}
      onClick={onHandleClick}
    >
      <div className="padre">
        <h3>{`Name : ${data.todo}`}</h3>
        <p> {data.completed ? "Good Job!" : "New challenge?"} </p>
      </div>
    </div>
  );
};

export default Todo;
