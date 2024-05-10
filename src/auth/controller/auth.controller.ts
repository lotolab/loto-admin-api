import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  NotImplementedException,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LotoModuleRoutes } from 'src/api/module.routes';
import { PublicApi } from 'src/decorators';
import { AccountSigninDto } from '../dto';
import { AuthService } from '../service/auth.service';

@ApiTags(`${LotoModuleRoutes.auth.name}`)
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @PublicApi()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  loginWithAccount(@Body() dto: AccountSigninDto) {
    return this.authService.signin(dto);
  }

  @PublicApi()
  @Post('signup')
  @HttpCode(HttpStatus.OK)
  signupWithAccount(@Body() _dto: Record<string, any>) {
    throw new NotImplementedException(`API not implemented.`);
  }
}
