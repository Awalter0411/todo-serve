import { ApiProperty } from "@nestjs/swagger";
import { ResponseOkVo } from "src/common/vo/responseOk.vo";
import { TodoInfoVo } from "./todo-info.vo";

export class CreateTodoVo extends ResponseOkVo{
  @ApiProperty({
    description: 'todo内容',
    type: TodoInfoVo
  })
  data: TodoInfoVo
}