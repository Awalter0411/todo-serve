import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { TransformInterceptor } from './interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 配置跨域
  app.enableCors();
  // 使用过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 使用拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  // 配置swagger
  const config = new DocumentBuilder()
    .setTitle('todo-serve')
    .setDescription('todo后端')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(8080);
}
bootstrap();
