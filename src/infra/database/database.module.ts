import { Module } from '@nestjs/common';
import { NotificationsReposity } from 'src/application/repositories/notifications-repository';
import { PrismaService } from './prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notification-respository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsReposity,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsReposity],
})
export class DataBaseModule {}
