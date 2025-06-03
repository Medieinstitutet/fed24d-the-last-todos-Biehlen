export class Todo {
    id: number;
    title: string;
    isCompleted: boolean;

    constructor(title: string, isCompleted: boolean) {
        this.id = Date.now();
        this.title = title;
        this.isCompleted = isCompleted;
    };
};