import { ApiProperty } from "@nestjs/swagger";

export class ResponseOkVo {
  
  @ApiProperty({ description: '状态码', example: 200 })
  code: number;

  @ApiProperty({ description: '请求结果信息', example: 'success' })
  message: string;
}