import { useContext, useState } from "react";
import { DefaultContext } from "@/state";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/plugins/firebase";

import Todo from "../Todo";
import styles from "./Todos.module.scss";

const Todos = () => {
  const { state, dispatch } = useContext(DefaultContext);
  const [input, setInput] = useState("");

  const onHandleInput = (e) => setInput(e.target.value);
  const onSetNewTodo = async (e) => {
    e.preventDefault();

    const payload = {
      id: Math.floor(Math.random() * 1000000),
      content: input,
      completed: false,
    };

    dispatch({
      type: "ADD_NEW_TODO",
      payload,
    });

    await addDoc(collection(db, "todos"), payload);

    setInput("");
  };

  return (
    <div className={styles.TodoList}>
      <div className={styles.heading}>
        <h1>All Todos</h1>
        <form className={styles.input} onSubmit={onSetNewTodo}>
          <input
            type="text"
            name="content"
            value={input}
            onChange={onHandleInput}
            placeholder="Add new..."
          />
          <input className={styles.addBtn} type="submit" value="+" />
        </form>
      </div>
      {state?.todos?.map((todo, i) => (
        <Todo data={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Todos;
