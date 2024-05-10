import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MockModule } from './test/mock.module';
import { WxchatController } from './wxchat/wxchat.controller';
import { WxchatService } from './wxchat/wxchat.service';
import { LotoModuleRoutes } from './module.routes';

@Module({
  imports: [
    RouterModule.register([
      {
        path: LotoModuleRoutes.mock.modulePath,
        module: MockModule,
      },
    ]),
    MockModule,
  ],
  controllers: [WxchatController],
  providers: [WxchatService],
})
export class ApiModule {}
