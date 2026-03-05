import { useState } from "react";
import { addTodo, deleteTodo } from "../features/todoSlice";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const [newTask, setNewTask] = useState("");

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="todoInput"
          id="todo"
          placeholder="Enter task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          onClick={() => {
            dispatch(addTodo(newTask));
            setNewTask("");
          }}
        >
          Add Task
        </button>
      </div>
      <div>
        <ul>
          {todos.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button onClick={() => dispatch(deleteTodo(task.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
