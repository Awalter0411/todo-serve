import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/modules/categories/entity/category.entity';

export class TodoInfoVo {
  @ApiProperty({
    description: 'todo的id',
    type: Number,
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'todo内容',
    type: String,
  })
  content: string;

  @ApiProperty({
    description: 'todo状态',
    type: Number,
  })
  status: number;

  @ApiProperty({
    description: 'todo的分类',
    type: Category,
  })
  category: Category;

  @ApiProperty({
    description: 'todo的开始时间',
    type: Date,
  })
  startTime: Date;

  @ApiProperty({
    description: 'todo的结束时间',
    type: Date
  })
  endTime: Date;

  @ApiProperty({
    description: 'todo创建时间',
    type: Date,
  })
  createTime: Date;

  @ApiProperty({
    description: 'todo更新时间',
    type: Date,
  })
  updateTime: Date;

  @ApiProperty({
    description: 'todo是否完成',
    type: Boolean
  })
  isFinished: boolean;
}
