import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { IdDto } from 'src/common/dto/id.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { EditTodoDto } from './dto/edit-todo.dto';
import { StatusDto } from './dto/status.dto';
import { TodoService } from './todo.service';
import { CreateTodoVo } from './vo/create-todo.vo';
import { DeleteTodoVo } from './vo/delete-todo.vo';
import { EditTodoVo } from './vo/edit-todo.vo';
import { TodoInfoVo } from './vo/todo-info.vo';
import { TodoListByStatusVo } from './vo/todo-list.vo';

@ApiTags('todo模块')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  /**
   * 创建todo
   * @param createTodoDto 创建的todo
   * @returns 创建的todo
   */
  @ApiOperation({
    summary: '创建todo',
  })
  @ApiBody({
    type: CreateTodoDto,
  })
  @ApiOkResponse({
    description: '创建todo',
    type: CreateTodoVo,
  })
  @Post('create')
  async createTodo(@Body() createTodoDto: CreateTodoDto) {
    return await this.todoService.createTodo(createTodoDto);
  }

  /**
   * 编辑todo
   * @param editTodoDto 编辑的todo
   * @returns 编辑的todo
   */
  @ApiOperation({
    summary: '编辑todo',
  })
  @ApiBody({
    type: EditTodoDto,
  })
  @ApiOkResponse({
    description: '编辑的todo',
    type: EditTodoVo,
  })
  @Post('edit')
  async editTodo(@Body() editTodoDto: EditTodoDto) {
    return await this.todoService.editTodo(editTodoDto);
  }

  /**
   * 删除todo
   * @param id 删除todo的id
   * @returns boolean
   */
  @ApiOperation({
    summary: '删除todo',
  })
  @ApiParam({
    name: 'id',
    type: Number,
  })
  @ApiOkResponse({
    type: DeleteTodoVo,
  })
  @Delete('delete/:id')
  async deleteTodo(@Param('id') id: number) {
    return await this.todoService.deleteTodo(id);
  }

  /**
   * 根据状态查找todo列表
   * @param statusDto todo的状态
   * @returns todo列表
   */
  @ApiOperation({
    summary: '根据状态查找todo',
  })
  @ApiQuery({
    name: 'status',
    type: Number,
  })
  @ApiOkResponse({
    description: '该状态的todo列表',
    type: TodoListByStatusVo,
  })
  @Get('/list/status')
  async getTodoListByStatus(@Query() statusDto: StatusDto) {
    return await this.todoService.getTodoListByStatus(statusDto);
  }
}
