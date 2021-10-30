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
  async createCategory(createCategoryDto: CreateCategoryDto) {
    const { name } = createCategoryDto;
    const hasCategory = await this.categoryRepository.findOne({
      where: {
        name: name,
        isDelete: false,
      },
    });
    if (hasCategory) {
      throw new HttpException('该分类已经存在', 404);
    }
    const newCategory = new Category();
    newCategory.name = name;
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
  async getCategoryList() {
    return await this.categoryRepository.find({
      select: ['id', 'name', 'createTime', 'updateTime'],
      where: {
        isDelete: false,
      },
    });
  }

  // 根据id删除分类
  async deleteCategory(id: number) {
    const category = await this.categoryRepository.findOne({
      where: {
        id: id,
        isDelete: false,
      },
    });
    if (!category) {
      throw new HttpException('todo不存在', 404);
    }

    category.isDelete = true;
    await this.categoryRepository.save(category);
    return '删除成功';
  }
}
