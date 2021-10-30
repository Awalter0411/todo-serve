import { ApiProperty } from "@nestjs/swagger";
import { isArray } from "class-validator";
import { ResponseOkVo } from "src/common/vo/responseOk.vo";
import { UserInfoVo } from "./user-info.vo";

export class UserListVo extends ResponseOkVo {
  @ApiProperty({
    description: '用户列表',
    type: UserInfoVo,
    isArray: true
  })
  list: Array<UserInfoVo>
}