import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryListVo } from './vo/category-list.vo';
import { CreateCategoryVo } from './vo/create-category.vo';
import { DeleteCategoryVo } from './vo/delete-category.vo';

@ApiTags('todo分类模块')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  /**
   * 创建todo的分类
   * @param createCategoryDto 创建的分类
   * @returns 创建的分类
   */
  @ApiOperation({
    summary: '创建分类',
  })
  @ApiBody({
    description: '创建的分类名称',
    type: CreateCategoryDto,
  })
  @ApiOkResponse({
    description: '创建的分类信息',
    type: CreateCategoryVo,
  })
  @Post('create')
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.createCategory(createCategoryDto);
  }

  /**
   * 获取所有分类
   * @returns 所有分类
   */
  @ApiOperation({
    summary: '获取所有分类',

  })
  @ApiOkResponse({
    type: CategoryListVo,
  })
  @Get('list')
  async getCategoryList() {
    return await this.categoryService.getCategoryList();
  }

  /**
   * 根据id删除分类
   * @param id 分类id
   * @returns boolean
   */
  @ApiOperation({
    summary: '根据id删除分类',
  })
  @ApiOkResponse({
    type: DeleteCategoryVo,
  })
  @Delete('delete/:id')
  async deleteCategory(@Param('id') id: number) {
    return this.categoryService.deleteCategory(id);
  }
}
