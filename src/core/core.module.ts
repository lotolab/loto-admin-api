import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisService } from './cache/redis/redis.service';
import { RedisFactory } from './cache/redis/redis-client.factory';
import { UserService } from './user/user.service';
import { UserEntity, UserProfileEntity } from './entities';
import { ToolsService } from './export.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, UserProfileEntity])],
  providers: [RedisFactory, RedisService, ToolsService, UserService],
  exports: [RedisService, ToolsService, UserService],
})
export class CoreModule {}
