import { Test, TestingModule } from '@nestjs/testing';
import { UserReservationController } from './user-reservation.controller';
import { UserReservationService } from './user-reservation.service';

describe('UserReservationController', () => {
  let controller: UserReservationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserReservationController],
      providers: [UserReservationService],
    }).compile();

    controller = module.get<UserReservationController>(UserReservationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
