import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthHelper } from './service/auth.helper';
import { AuthService } from './service/auth.service';
import { RouterModule } from '@nestjs/core';
import { LotoModuleRoutes } from 'src/api/module.routes';
import { AuthController } from './controller/auth.controller';

/**
 * https://medium.com/@osanmisola/jwt-authentication-for-your-nestjs-server-a-tutorial-276edf67d4ce
 * https://www.sipios.com/blog-posts/implementing-authentication-in-nestjs-using-passport-and-jwt
 * 1.
 */
@Global()
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', property: 'user' }),
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('jwt.secretKey'),
        signOptions: {
          issuer: config.get<string>('jwt.iss', 'lotolab'),
          expiresIn: config.get<string>('jwt.expirein', '1d'),
        },
      }),
      inject: [ConfigService],
    }),
    RouterModule.register([
      {
        path: LotoModuleRoutes.auth.modulePath,
        module: AuthModule,
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthHelper, AuthService],
  exports: [AuthHelper, AuthService],
})
export class AuthModule {}
