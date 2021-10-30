import { ApiProperty } from "@nestjs/swagger";
import { isArray } from "class-validator";
import { ResponseOkVo } from "src/common/vo/responseOk.vo";
import { CategoryInfoVo } from "./category-info.vo";

export class CategoryListVo extends ResponseOkVo{
  @ApiProperty({
    type: CategoryInfoVo,
    isArray: true
  })
  data: Array<CategoryInfoVo>
}