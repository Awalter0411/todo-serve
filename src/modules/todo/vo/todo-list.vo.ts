import { ApiProperty } from "@nestjs/swagger";
import { TodoInfoVo } from "./todo-info.vo";

export class TodoListByStatusVo {
  @ApiProperty({
    description: '数据',
    type: TodoInfoVo,
    isArray: true,
  })
  data: Array<TodoInfoVo>
}