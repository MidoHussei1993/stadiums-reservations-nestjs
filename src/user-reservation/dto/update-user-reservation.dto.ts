import { PartialType } from '@nestjs/mapped-types';
import { CreateUserReservationDto } from './create-user-reservation.dto';

export class UpdateUserReservationDto extends PartialType(CreateUserReservationDto) {}
