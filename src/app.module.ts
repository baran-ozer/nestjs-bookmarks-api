import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { LoggerMiddleware } from './middleware';
import { UserController } from './user/user.controller';
import { BookmarkController } from './bookmark/bookmark.controller';
import { AuthController } from './auth/auth.controller';
import helmet from 'helmet';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(helmet(), LoggerMiddleware)
      .exclude({ path: 'auth/signup', method: RequestMethod.POST }) // don't use middleware for signup
      .forRoutes(UserController, BookmarkController, AuthController);
  }
}
