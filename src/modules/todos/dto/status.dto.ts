import { ApiProperty } from "@nestjs/swagger";

export class StatusDto {
  @ApiProperty({
    description: '状态',
    type: Number
  })
  status: number
}