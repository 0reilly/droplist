import { TodoService } from './todo.service';
import { TodoDTO } from './todo.dto';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getAllTodos(req: any): Promise<import("./todo.dto").TodoSO[]>;
    createTodo(req: any, content: Extract<TodoDTO, 'content'>): Promise<import("./todo.dto").TodoSO>;
}
