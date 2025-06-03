import { Todo } from "../models/Todo";

export type SortOrder = 
  | "incomplete-first" 
  | "complete-first" 
  | "alphabetical-asc" 
  | "alphabetical-desc";

  export function sortTodos(todos: Todo[], sortOrder: SortOrder): Todo[] {
    const todosCopy = [...todos];
  
    if (sortOrder === "incomplete-first") {
      return todosCopy.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
    }
    if (sortOrder === "complete-first") {
      return todosCopy.sort((a, b) => Number(b.isCompleted) - Number(a.isCompleted));
    }
    if (sortOrder === "alphabetical-asc") {
      return todosCopy.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortOrder === "alphabetical-desc") {
      return todosCopy.sort((a, b) => b.title.localeCompare(a.title));
    }
    
    return todosCopy;
  };
  
