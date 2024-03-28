import { Injectable } from '@nestjs/common';
import { CreateUserReservationDto } from './dto/create-user-reservation.dto';
import { UpdateUserReservationDto } from './dto/update-user-reservation.dto';

@Injectable()
export class UserReservationService {
  create(createUserReservationDto: CreateUserReservationDto) {
    return 'This action adds a new userReservation';
  }

  findAll() {
    return `This action returns all userReservation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userReservation`;
  }

  update(id: number, updateUserReservationDto: UpdateUserReservationDto) {
    return `This action updates a #${id} userReservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} userReservation`;
  }
}
