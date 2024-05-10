import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { formatDateTime } from './core/utils';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [ConfigService, AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    const d = formatDateTime();
    it(`should return "[time] Hey gay,I am running..."`, () => {
      expect(appController.getHello()).toBe(
        ` ${d}<br> Hey gay,I am running...!`,
      );
    });
  });
});
