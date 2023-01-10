import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  //with built in decor
  // getMe(@Req() req: Request) {
  //   return req.user;
  // }
  //with custom decorator way
  getMe(@GetUser() user: User) {
    return user;
  }
}
