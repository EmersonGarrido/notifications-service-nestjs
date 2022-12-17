import { Module } from '@nestjs/common';
import { DataBaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { MessagingModule } from '@infra/messaging/messaging.module';

@Module({
  imports: [HttpModule, DataBaseModule, MessagingModule],
})
export class AppModule {}
