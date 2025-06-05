import { Todo } from "../models/Todo";

export const initialTodos: Todo[] = [
    {id: Date.now(), title: "Do the laundry", isCompleted: false},
    {id: Date.now() +1, title: "Study", isCompleted: false},
    {id: Date.now() +2, title: "Go for a walk", isCompleted: false},
    {id: Date.now() +3, title: "Buy a new carpet", isCompleted: false},
    {id: Date.now() +4, title: "Buy flowers", isCompleted: false},
    {id: Date.now() +5, title: "Do the dishes", isCompleted: false},
    {id: Date.now() +6, title: "Book a trip", isCompleted: false},
    {id: Date.now() +7, title: "Go swimming", isCompleted: false},
    {id: Date.now() +8, title: "Go for a run", isCompleted: false},
];