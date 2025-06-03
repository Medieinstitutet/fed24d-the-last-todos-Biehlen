import { Todo } from "../models/Todo";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};


export const TodoItem = ({ todo, toggleTodo, removeTodo }: TodoItemProps) => {
    const handleClick = () => {
        toggleTodo(todo.id);
    };

    const handleDelete = (e: React.MouseEvent) => {
      e.stopPropagation();
      const confirmed = window.confirm("Are you sure you want to delete this todo?");
      if (confirmed) {
        removeTodo(todo.id);
      }
    }

  return (
    <div 
        onClick={handleClick} 
        className={`p-4 rounded-lg shadow-md cursor-pointer transition-all duration-200 w-full
        ${todo.isCompleted ? "bg-gray-300" : "bg-gray-200"}
        hover:shadow-lg`}
        style={{ filter: todo.isCompleted ? "blur(1px)" : "none"}}
    >
      <div className="flex items-center justify-between">
        <p className={`text-lg ${todo.isCompleted ? "line-through text-gray-500" : "text-gray-800"}`}>
            {todo.title}
        </p>
        <div className="flex items-center gap-4">
          <input 
            type="checkbox" 
            checked={todo.isCompleted} 
            onChange={() => {}} 
            className="w-5 h-5"
          />
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 text-xl"
            aria-label="Delete todo"
            title="Delete todo"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};


