import { useState } from "react";

type AddTodoFormProps = {
    addTodo: (title: string) => void;
};

export const AddTodoForm = ({ addTodo }: AddTodoFormProps) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() === "") return;
        addTodo(title.trim());
        setTitle("");
    };

    return (
        <>
            <div className="bg-blue-100 p-6 rounded-lg w-full">
                <h2 className="text-2xl font-semibold text-center mb-4 text-blue-900">
                    Create new todo
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input 
                        type="text" 
                        className="flex-grow p-3 border-2 border-black rounded text-black" 
                        placeholder="Write your todo here..." 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600 transition w-full sm:w-auto py-3 sm:py-2"
                    >
                        Create
                    </button>
                </form>
            </div>
        </>
    );
};