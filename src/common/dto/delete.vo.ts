import { ApiProperty } from "@nestjs/swagger";
import { ResponseOkVo } from "../vo/responseOk.vo";

export class DeleteVo extends ResponseOkVo {
  @ApiProperty({
    description: '数据',
    type: String,
    example: '删除成功'
  })
  message: string;
}