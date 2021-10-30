import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    description: '名字',
    type: String,
  })
  name: string;
}
