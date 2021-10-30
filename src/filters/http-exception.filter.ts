import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Length } from 'class-validator';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const message = exception.message;

    // 验证抛出的错误信息
    const exceptionResponse: any = exception.getResponse();
    let validateMessage = exceptionResponse
    if(typeof validateMessage === 'object') {
      validateMessage = exceptionResponse.message;
    }

    response
      .status(status)
      .json({
        statusCode: status,
        message: validateMessage || message
      });
  }
}
