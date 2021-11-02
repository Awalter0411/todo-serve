import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../todos/entity/todo.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entity/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  // 创建分类
  async createCategory(createCategoryDto: CreateCategoryDto, userId: number) {
    const { name } = createCategoryDto;
    const hasCategory = await this.categoryRepository.findOne({
      where: {
        name: name,
        isDelete: false,
        user: userId,
      },
    });
    if (hasCategory) {
      throw new HttpException('该分类已经存在', 404);
    }
    const newCategory = new Category();
    newCategory.name = name;
    newCategory.user = userId;
    const result = await this.categoryRepository.save(newCategory);
    const { id, createTime, updateTime } = result;
    return {
      id,
      name,
      createTime,
      updateTime,
    };
  }

  // 获取所有分类
  async getCategoryList(userId: number) {
    return await this.categoryRepository.find({
      select: ['id', 'name', 'createTime', 'updateTime'],
      where: {
        isDelete: false,
        user: userId,
      },
    });
  }

  // 根据id删除分类
  async deleteCategory(id: number, userId: number) {
    const category = await this.categoryRepository.findOne({
      where: {
        id: id,
        isDelete: false,
        user: userId,
      },
    });
    if (!category) {
      throw new HttpException('todo不存在', 404);
    }
    // 找到属于此分类的todo列表
    const todoList = await this.todoRepository.find({
      where: {
        isDelete: false,
        user: userId,
        category,
      },
    });
    // 删除此分类下的所有todo
    for (let i = 0; i < todoList.length; i++) {
      todoList[i].isDelete = true;
      console.log(todoList[i])
      await this.todoRepository.save(todoList[i])
    }
    category.isDelete = true;
    await this.categoryRepository.save(category);
    return;
  }
}
