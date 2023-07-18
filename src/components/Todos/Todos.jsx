import { DefaultContext, initialState } from "@/state";
import { useContext } from "react";
import Todo from "../Todo/Todo";

const Todos = () => {
  const TodoData = useContext(DefaultContext);
  console.log(TodoData);
  return (
    <div className="Todos">
      {TodoData.initialState.map((todo) => (
        <Todo data={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Todos;
