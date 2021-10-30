import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from './users.service';
import { LoginVo } from './vo/login.vo';
import { RegisterVo } from './vo/register.vo';
import { UserListVo } from './vo/user-list.vo';

@ApiTags('用户模块')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService){}

  /**
   * 用户注册
   * @param registerDto 注册的用户
   * @returns 注册成功的用户
   */
  @ApiOperation({
    summary: '用户注册'
  })
  @ApiBody({
    type: RegisterDto
  })
  @ApiOkResponse({
    description: '用户注册',
    type: RegisterVo
  })
  @Post('register')
  async register(@Body() registerDto: RegisterDto){
    return await this.usersService.register(registerDto)
  }

  /**
   * 用户登录
   * @param loginDto 登录的用户
   * @returns token
   */
  @ApiOperation({
    summary: '用户登录'
  })
  @ApiBody({
    type: LoginDto
  })
  @ApiOkResponse({
    type: LoginVo
  })
  @Post('login') 
  async login(@Body () loginDto: LoginDto) {
    return await this.usersService.login(loginDto);
  }
  
  @ApiBearerAuth()
  @ApiOperation({
    summary: '获取用户列表'
  })
  @ApiOkResponse({
    type: UserListVo
  })
  @UseGuards(AuthGuard('jwt'))
  @Get('list')
  async getAllUsers() {
    return await this.usersService.getAllUsers()
  }
}
