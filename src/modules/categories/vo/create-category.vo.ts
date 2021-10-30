import { ApiProperty } from "@nestjs/swagger";
import { ResponseOkVo } from "src/common/vo/responseOk.vo";
import { CategoryInfoVo } from "./category-info.vo";

export class CreateCategoryVo extends ResponseOkVo {
  @ApiProperty({
    description: '数据',
    type: CategoryInfoVo
  })
  data: CategoryInfoVo
}