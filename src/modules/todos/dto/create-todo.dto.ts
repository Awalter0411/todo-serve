import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/modules/categories/entity/category.entity';

export class CreateTodoDto {
  @ApiProperty({
    description: 'todo内容',
    type: String,
  })
  content: string;

  @ApiProperty({
    description: 'todo的状态',
    type: Number,
  })
  status: number;

  @ApiProperty({
    description: 'todo的分类',
    type: Number,
  })
  categoryId: number;

  @ApiProperty({
    description: '开始时间',
    type: Date,
    example: '2021-11-11',
  })
  startTime: Date;
  @ApiProperty({
    description: '结束时间',
    type: Date,
    example: '2021-11-11',
  })
  endTime: Date;
}
