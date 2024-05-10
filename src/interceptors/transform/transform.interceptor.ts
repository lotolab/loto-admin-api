import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { instanceToPlain } from 'class-transformer';

import { IgnoreTransformPropertyName } from 'src/decorators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  protected readonly logger = new Logger(TransformInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // TODO push IP visit message

    // TODO checkLimit

    const ignored = context.getHandler()[IgnoreTransformPropertyName];

    return ignored
      ? next.handle()
      : next.handle().pipe(
          map((data: any): LotoResponseType => {
            return {
              code: HttpStatus.OK,
              message: 'Success',
              result: instanceToPlain(data),
            };
          }),
        );
  }
}
