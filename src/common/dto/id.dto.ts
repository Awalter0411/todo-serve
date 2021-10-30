import { IsNotEmpty } from 'class-validator';

export class IdDto {
  @IsNotEmpty({
    message: 'id不能为空',
  })
  id: number;
}
