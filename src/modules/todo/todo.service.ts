import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { EditTodoDto } from './dto/edit-todo.dto';
import { Todo } from './entity/todo.entity';
import { isNumber } from '../../utils/validate.util';
import { StatusDto } from './dto/status.dto';
import { IdDto } from 'src/common/dto/id.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  // 创建一个todo
  async createTodo(createTodoDto: CreateTodoDto) {
    const todo = new Todo();
    todo.content = createTodoDto.content;
    todo.status = createTodoDto.status;
    const result = await this.todoRepository.save(todo);
    const { id, content, status, createTime, updateTime } = result;
    return {
      id,
      content,
      status,
      createTime,
      updateTime,
    };
  }

  // 编辑todo
  async editTodo(editTodoDto: EditTodoDto) {
    const { id } = editTodoDto;
    const todo = await this.todoRepository.findOne({
      where: {
        id: id,
        isDelete: false
      },
    });
    if (!todo) {
      throw new HttpException('todo不存在', 400);
    }
    for (let key in editTodoDto) {
      if (key !== 'id') todo[key] = editTodoDto[key];
    }
    const result = await this.todoRepository.save(todo);
    return {
      ...result,
    };
  }

  // 删除todo
  async deleteTodo(id: number) {
    const todo = await this.todoRepository.findOne({
      where:{
        id: id
      }
    })
    if(!todo) {
      throw new HttpException('todo不存在',404);
    }
    todo.isDelete = true;
    await this.todoRepository.save(todo)
    return '删除成功'
  }

  // 根据状态查找todo列表
  async getTodoListByStatus(statusDto: StatusDto) {
    const { status } = statusDto;
    if (!isNumber(status)) {
      throw new HttpException('传入的状态有误', 404);
    }
    const todoList = await this.todoRepository.find({
      where: {
        status: status,
        isDelete: false
      },
      select: ['id', 'content', 'status', 'createTime', 'updateTime'],
    });
    return todoList;
  }
}
