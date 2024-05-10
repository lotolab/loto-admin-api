import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { JwtGuard } from './guards/jwt.guard';
import { BceModule } from './sdk/bce/bce.module';
import { WxaiModule } from './sdk/wxai/wxai.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtStrategy } from './auth';
import yamlConfiguration, {
  configValidationSchema,
  TypeormConfigService,
} from './config';
import { TransformInterceptor } from './interceptors';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: false,
      isGlobal: true,
      validationSchema: configValidationSchema,
      load: [yamlConfiguration],
      validationOptions: {
        allowUnknow: true,
        abortEarly: true,
      },
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeormConfigService,
    }),
    AuthModule,
    CoreModule,
    ApiModule,
    BceModule,
    WxaiModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    JwtStrategy,
  ],
})
export class AppModule {}
