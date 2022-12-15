import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification';
import { NotificationsReposity } from '@application/repositories/notifications-repository';
import { PrismaService } from '@infra/database/prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsReposity {
  constructor(private prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createAt,
      },
    });
  }
}