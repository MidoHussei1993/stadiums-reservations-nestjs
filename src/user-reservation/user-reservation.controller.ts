import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserReservationService } from './user-reservation.service';
import { CreateUserReservationDto } from './dto/create-user-reservation.dto';
import { UpdateUserReservationDto } from './dto/update-user-reservation.dto';

@Controller('user-reservation')
export class UserReservationController {
  constructor(private readonly userReservationService: UserReservationService) {}

  @Post()
  create(@Body() createUserReservationDto: CreateUserReservationDto) {
    return this.userReservationService.create(createUserReservationDto);
  }

  @Get()
  findAll() {
    return this.userReservationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userReservationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserReservationDto: UpdateUserReservationDto) {
    return this.userReservationService.update(+id, updateUserReservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userReservationService.remove(+id);
  }
}
