import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../todos/entity/todo.entity';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category } from './entity/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category,Todo])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
