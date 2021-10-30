import { ApiProperty } from "@nestjs/swagger";
import { ResponseOkVo } from "src/common/vo/responseOk.vo";
import { TodoInfoVo } from './todo-info.vo'

export class EditTodoVo extends ResponseOkVo {
  @ApiProperty({
    description: '数据',
    type: TodoInfoVo
  })
  data: TodoInfoVo
}