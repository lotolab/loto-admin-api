/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

import { UserEntity } from '../entities';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('UserService', () => {
  let service: UserService;
  let userRepository: Repository<UserEntity>;

  const USER_REPO_TOKEN = getRepositoryToken(UserEntity);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            create: jest.fn(),
            findOne: jest.fn().mockReturnValue({ username: 'admin', id: 1 }),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<Repository<UserEntity>>(USER_REPO_TOKEN);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('query user', () => {
    it('should exists an user with id 1 username admin', async () => {
      const entity = await service.getUserById(1);
      expect(entity?.username).toBe('admin');
    });
  });
});
