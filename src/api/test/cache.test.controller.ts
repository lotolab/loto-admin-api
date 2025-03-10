import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LotoModuleRoutes } from '../module.routes';
import { CacheTestService } from './cache.test.service';
import { ICurrentUser, ILoginUser } from 'src/core/interface';
import { CurrentUser, PublicApi } from 'src/decorators';

@ApiTags(`${LotoModuleRoutes.mock.name} Cache 缓存`)
@Controller()
export class CacheTestController {
  constructor(private readonly service: CacheTestService) {}

  @ApiOperation({ summary: 'redis Get test' })
  @Get('get_by_key')
  getCacheByKey(
    @Query() queryDto: { appid: string },
    @CurrentUser() u: ICurrentUser,
  ) {
    globalThis.console.log('>>p-u>>', u);
    const { appid } = queryDto;
    return this.service.getCacheKey(appid);
  }

  @PublicApi()
  @Put('set_cache')
  @HttpCode(HttpStatus.OK)
  setMockCache(@Body() dto: { appid: string }) {
    const { appid } = dto;
    return this.service.setCacheKey(appid);
  }

  @ApiOperation({ summary: 'Get user by uid test' })
  @Get('get_user')
  getUserInfo(
    @CurrentUser() user: ICurrentUser,
    @Query() queryDto: { uid: number },
  ) {
    globalThis.console.log('>u>>', user);
    return this.service.findUserById(queryDto.uid);
  }
  @ApiOperation({ summary: 'login with account & password test' })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: ILoginUser) {
    return this.service.loginWithAccount(dto);
  }

  @ApiOperation({ summary: 'check token' })
  @Get('check_token')
  validToken(@Query() { token }: { token: string }) {
    return this.service.validJwtToken(token);
  }
}
