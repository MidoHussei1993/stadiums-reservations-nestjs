import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StadiumsModule } from './stadiums/stadiums.module';
import { UsersModule } from './users/users.module';
import { ReservationsModule } from './reservations/reservations.module';
import { UserReservationModule } from './user-reservation/user-reservation.module';

@Module({
  imports: [StadiumsModule, UsersModule, ReservationsModule, UserReservationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
