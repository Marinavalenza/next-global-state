import { DefaultContext } from "@/state";
import { useContext, useState } from "react";
import Todo from "../Todo/Todo";

const Todos = () => {
  const { state, dispatch } = useContext(DefaultContext);
  const [input, setInput] = useState("");

  const onHandleInput = (e) => setInput(e.target.value);
  const onSetNewTodo = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_ADD",
      payload: {
        id: Math.floor(Math.random() * 1000000),
      },
      content: input,
      completed: false,
    });
    setInput("");
  };
  return (
    <div className="Todos">
      <div className="TitleInput">
        <h1>All Todos</h1>

        <form className={input}>
          <input
            type="text"
            name="content"
            value={input}
            onChange={onHandleInput}
            placeholder="Add new..."
          />
          <input className="AddBtn" type="submit" value="+" />
        </form>
      </div>

      {state?.map((todo) => (
        <>
          <Todo data={todo} key={todo.id} />
        </>
      ))}
    </div>
  );
};

export default Todos;
