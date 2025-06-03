import { Todo } from "../models/Todo";

export const initialTodos: Todo[] = [
    {id: Date.now(), title: "Do the laundry", isCompleted: false},
    {id: Date.now() +1, title: "Study", isCompleted: false},
    {id: Date.now() +2, title: "Go for a walk", isCompleted: false},
    {id: Date.now() +3, title: "Buy a new carpet", isCompleted: false},
];