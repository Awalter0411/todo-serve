import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { JwtStrategy } from './jwt.strategy';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { jwtConstants } from 'src/config/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    // jwt注册
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  controllers: [UsersController],
  // 使用jwt策略
  providers: [UsersService, JwtStrategy],
})
export class UsersModule {}
