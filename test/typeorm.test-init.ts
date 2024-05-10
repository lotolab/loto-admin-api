import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfigService } from '../src/config';

export const TypeOrmMysqlTestModule = (_entities: any[]) =>
  TypeOrmModule.forRootAsync({
    useClass: TypeormConfigService,
  });
