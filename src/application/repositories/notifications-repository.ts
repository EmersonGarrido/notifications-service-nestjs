import { Notification } from '../entities/notification';

export abstract class NotificationsReposity {
  abstract create(notification: Notification): Promise<void>;
}
