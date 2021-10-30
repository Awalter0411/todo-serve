import { ApiProperty } from "@nestjs/swagger";

export class CategoryInfoVo {
  @ApiProperty({
    type: Number
  })
  id: number;

  @ApiProperty({
    type: String
  })
  name: string;

  @ApiProperty({
    type: Date
  })
  createTime: string;

  @ApiProperty({
    type: Date
  })
  updateTime: string;

  
}