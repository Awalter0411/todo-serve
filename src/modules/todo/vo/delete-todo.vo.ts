import { ApiProperty } from '@nestjs/swagger';
import { ResponseOkVo } from 'src/common/vo/responseOk.vo';

export class DeleteTodoVo extends ResponseOkVo {
  @ApiProperty({
    description: '数据',
    type: String,
    example: '删除成功'
  })
  message: string;
}
