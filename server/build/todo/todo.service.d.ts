import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';
import { TodoDTO, TodoSO } from './todo.dto';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<TodoEntity>);
    private responseOject;
    getAllTodos: () => Promise<TodoSO[]>;
    createTodo: (content: Extract<TodoDTO, 'content'>) => Promise<TodoSO>;
}
