import {
  Controller,
  Get,
  Post,
  Body,
  Req,
} from '@nestjs/common';

import { TodoService } from './todo.service';
import { TodoDTO } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/all')
  getAllTodos(@Req() req) {
    return this.todoService.getAllTodos();
  }

  @Post('/create')
  createTodo(
    @Req() req,
    @Body('content') content: Extract<TodoDTO, 'content'>,
  ) {
    return this.todoService.createTodo(content);
  }

}
