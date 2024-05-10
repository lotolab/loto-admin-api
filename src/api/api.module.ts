import { Module } from '@nestjs/common';
import { MockModule } from './test/mock.module';
import { RouterModule } from '@nestjs/core';
import { LotoModuleRoutes } from './module.routes';
import { WxchatController } from './wxchat/wxchat.controller';
import { WxchatService } from './wxchat/wxchat.service';

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
