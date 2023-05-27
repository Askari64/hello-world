import React from "react";
import { useState } from "react";
import "./todo.css";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [varId, setVarId] = useState(0);

  function addTask() {
    setList([...list, { id: varId, task: task }]);
    setVarId(varId + 1);
  }

  function taskNameHandle(e) {
    setTask(e.target.value);
  }

  function deleteTask(id) {
    setList(list.filter((item) => item.id !== id));
  }
  return (
    <>
      <h1>Todo List</h1>

      <input value={task} onChange={taskNameHandle} placeholder="Task" />

      <button onClick={addTask} className="AddButton">
        Add Task
      </button>

      <ol className="container">
        {list.map((arr) => {
          return (
            <li key={arr.id}>
              {arr.task}
              <button
                onClick={() => deleteTask(arr.id)}
                className="DeleteButton"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
}