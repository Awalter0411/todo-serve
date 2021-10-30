import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TodoModule } from './modules/todos/todos.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'lyxa1105',
    database: 'todo',
    autoLoadEntities: true,
    synchronize: true
  }),UsersModule, TodoModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
