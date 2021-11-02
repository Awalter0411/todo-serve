import { ApiProperty } from "@nestjs/swagger";
import { Category } from "src/modules/categories/entity/category.entity";

export class EditTodoDto{
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
    type: Number
  })
  categoryId: number;

  @ApiProperty({
    description: 'todo的开始时间',
    type: Date,
    example: '2021-11-11'
  })
  startTime: Date;

  @ApiProperty({
    description: 'todo的结束时间',
    type:Date,
    example: '2021-11-11'
  })
  endTime: Date;

  @ApiProperty({
    description: 'todo是否完成'
  })
  isFinished: boolean;

}