import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { IdDto } from 'src/common/dto/id.dto';
import { RolesGuard } from 'src/common/guards/role.guard';
import { AuthUser } from '../users/decorators/user.decorator';
import { CreateTodoDto } from './dto/create-todo.dto';
import { EditTodoDto } from './dto/edit-todo.dto';
import { StatusDto } from './dto/status.dto';
import { TodoService } from './todos.service';
import { CreateTodoVo } from './vo/create-todo.vo';
import { DeleteTodoVo } from './vo/delete-todo.vo';
import { EditTodoVo } from './vo/edit-todo.vo';
import { TodoInfoVo } from './vo/todo-info.vo';
import { TodoListByStatusVo } from './vo/todo-list.vo';
import { roleConstants as role } from 'src/config/constants';
import { RoleInterceptor } from 'src/common/interceptors/role.interceptors';


@ApiBearerAuth()
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
  // 权限设置
  @UseGuards(new RolesGuard(role.HUMAN))
  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async createTodo(@Body() createTodoDto: CreateTodoDto, @AuthUser("id") userId: number) {
    return await this.todoService.createTodo(createTodoDto,userId);
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
  @UseGuards(AuthGuard('jwt'))
  @Post('edit')
  async editTodo(@Body() editTodoDto: EditTodoDto, @AuthUser('id') userId: number) {
    return await this.todoService.editTodo(editTodoDto, userId);
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
  @UseGuards(AuthGuard('jwt'))
  async deleteTodo(@Param('id') id: number, @AuthUser('id') userId: number) {
    return await this.todoService.deleteTodo(id, userId);
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
  @UseGuards(AuthGuard('jwt'))
  @Get('/list/status')
  async getTodoListByStatus(@Query() statusDto: StatusDto, @AuthUser('id') userId: number) {
    return await this.todoService.getTodoListByStatus(statusDto, userId);
  }
}
