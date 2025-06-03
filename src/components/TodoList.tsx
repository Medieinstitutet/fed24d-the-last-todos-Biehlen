import { Todo } from "../models/Todo";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
};

export const TodoList = ({ todos, toggleTodo, removeTodo }: TodoListProps) => {
    return (
        <>
            <ul className="space-y-2 mb-10">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
                ))}
            </ul>        
        </>
    );
};