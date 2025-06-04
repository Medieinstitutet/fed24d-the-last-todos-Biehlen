import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { initialTodos } from "./Data/initialTodos";
import { Todo } from "./models/Todo";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";
import { AddTodoForm } from "./components/AddTodoForm";
import { type SortOrder, sortTodos } from "./components/SortTodos";
import { SortDropdown } from "./components/SortDropdown";



function App() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("incomplete-first");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
        return JSON.parse(saved);
    } else {
        return initialTodos;
    }
  });

  const sortedTodos = sortTodos(todos, sortOrder);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id: number) => {
    setTodos(prev =>
        prev.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
    );
};

const addTodo = (title: string) => {
  const newTodo = new Todo(title, false);
  setTodos((prev) => [newTodo, ...prev]);
};

const removeTodo = (id: number) => {
  setTodos(prev => prev.filter(todo => todo.id !== id));
};
  
  return (
    <>
      <Header />
      
      <div className="max-w-xl md:max-w-xl lg:max-w-3xl mx-auto p-4 text-right">
        <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

        <div className="max-w-md md:max-w-xl lg:max-w-3xl mx-auto p-4 space-y-4">
          <div className="overflow-y-auto max-h-[40vh] md:max-h-[60vh] lg:max-h[80vh]">
            <TodoList todos={sortedTodos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
          </div>
          <AddTodoForm addTodo={addTodo}/>
        </div>
    </>
  )
};

export default App;
