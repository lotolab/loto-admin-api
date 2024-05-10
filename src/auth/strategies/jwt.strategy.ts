import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { RedisService } from 'src/core/cache';
import { ICurrentUser, ITokenUser } from 'src/core/interface';
import { convertDiffToSeconds } from 'src/core/utils';
import { AuthHelper } from '../service/auth.helper';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  protected logger = new Logger(JwtStrategy.name);

  constructor(
    private readonly config: ConfigService,
    private readonly redis: RedisService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: config.get<string>('jwt.secretKey'),
    });
  }

  /**
   *
   * @param payload
   * @returns
   */
  async validate(payload: JwtAccessPayload) {
    const { id, iat } = payload;
    this.logger.log(payload);
    const key = AuthHelper.tokenCacheKey(id, iat);
    const tokenUser = await this.redis.getData<ITokenUser>(key);
    if (!tokenUser) throw new ForbiddenException(`Jwt Token invalid.`);
    const { token, ...others } = tokenUser;
    const user: ICurrentUser = { ...others };
    await this.extendExpireIn(key);
    return user;
  }

  private async extendExpireIn(key: string) {
    const ex = this.config.get<string>('jwt.expirein');
    const duration = convertDiffToSeconds(ex);

    await this.redis.setExpires(key, duration);
  }
}
