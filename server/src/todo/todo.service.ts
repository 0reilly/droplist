import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';
import { TodoDTO, TodoSO } from './todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  private responseOject = (todo: TodoEntity): TodoSO => {
    return {
      ...todo,
    };
  };


  getAllTodos = async (): Promise<TodoSO[]> => {

    const todos = await this.todoRepository.find({
      order: { createdOn: 'DESC' },
    });
    return todos.map(todo => {
      return this.responseOject(todo);
    });
  };

  createTodo = async (
    content: Extract<TodoDTO, 'content'>,
  ): Promise<TodoSO> => {
    const newTodo = this.todoRepository.create({
      content,
    });
    await this.todoRepository.save(newTodo);

    return this.responseOject(newTodo);
  };
}
