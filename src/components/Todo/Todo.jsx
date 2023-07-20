import { useContext } from "react";
import { DefaultContext } from "@/state";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "@/plugins/firebase";
import styles from "./Todo.module.scss";

const TodoItem = ({ data }) => {
  const { dispatch } = useContext(DefaultContext);

  const onHandleClick = async () => {
    if (confirm("Are YOu sure?")) {
      dispatch({ type: "SET_TODO_COMPLETED", payload: data.id });

      await updateDoc(doc(db, "todos-list", data.id), {
        completed: !data.completed,
      });
    }
  };

  const onHandleDelete = async (e) => {
    if (e.pageX >= 0) {
      dispatch({ type: "REMOVE_TODO", payload: data.id });

      try {
        await deleteDoc(doc(db, "todos-list", data.id));
      } catch (e) {}
    }
  };

  const onHandleDrag = (e) => {
    e.target.style.display = "none";
  };

  return (
    <div
      className={`${styles.TodoItem} ${data.completed && styles.completed}`}
      onClick={onHandleClick}
      onDragEnd={onHandleDelete}
      onDrag={onHandleDrag}
      draggable="true"
    >
      <div className={styles.content}>
        <p>{data.id}</p>
        <h3>{data.content}</h3>
      </div>
      <p>{data.completed ? "Good Job" : "New Challenge?"}</p>
    </div>
  );
};

export default TodoItem;
