import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoTask from "./Components/TodoTask";
import { ITASK } from "./Interfaces";

const App: FC = () => {
  const [todoList, setTodoList] = useState<ITASK[]>([]);

  return (
    <div className="App">
      <header>
        <TodoForm todoList={todoList} setTodoList={setTodoList} />
      </header>
      <main>
        {todoList.map((task: ITASK, key: number) => (
          <TodoTask
            key={key}
            task={task}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
