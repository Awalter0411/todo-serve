import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthUser } from '../users/decorators/user.decorator';
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
  @ApiBearerAuth()
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
  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async createCategory(@Body() createCategoryDto: CreateCategoryDto, @AuthUser('id') userId: number) {
    return await this.categoryService.createCategory(createCategoryDto, userId);
  }

  /**
   * 获取所有分类
   * @returns 所有分类
   */
  @ApiBearerAuth()
  @ApiOperation({
    summary: '获取所有分类',

  })
  @ApiOkResponse({
    type: CategoryListVo,
  })
  @UseGuards(AuthGuard('jwt'))
  @Get('list')
  async getCategoryList(@AuthUser('id') userId: number) {
    return await this.categoryService.getCategoryList(userId);
  }

  /**
   * 根据id删除分类
   * @param id 分类id
   * @returns boolean
   */
  @ApiBearerAuth()
  @ApiOperation({
    summary: '根据id删除分类',
  })
  @ApiOkResponse({
    type: DeleteCategoryVo,
  })
  @UseGuards(AuthGuard('jwt'))
  @Delete('delete/:id')
  async deleteCategory(@Param('id') id: number, @AuthUser('id') userId: number) {
    return this.categoryService.deleteCategory(id, userId);
  }
}
