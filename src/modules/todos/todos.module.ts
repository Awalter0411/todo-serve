import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../categories/entity/category.entity';
import { Todo } from './entity/todo.entity';
import { TodoController } from './todos.controller';
import { TodoService } from './todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo,Category])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
