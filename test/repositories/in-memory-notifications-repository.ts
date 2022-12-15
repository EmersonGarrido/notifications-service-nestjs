import { Notification } from '../../src/application/entities/notification';
import { NotificationsReposity } from '../../src/application/repositories/notifications-repository';

export class InMemorynotificationsRepository implements NotificationsReposity {
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
