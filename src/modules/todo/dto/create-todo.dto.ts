import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto {
  @ApiProperty({
    description: 'todo内容',
    type: String
  })
  content: string

  @ApiProperty({
    description: 'todo的状态',
    type: Number
  })
  status: number
}