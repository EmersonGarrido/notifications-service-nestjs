import { Notification } from '@application/entities/notification';

export abstract class NotificationsReposity {
  abstract create(notification: Notification): Promise<void>;
}
