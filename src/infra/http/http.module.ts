import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { DataBaseModule } from '@infra/database/database.module';
import { NotificationsController } from '@infra/http/controllers/notifications.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
