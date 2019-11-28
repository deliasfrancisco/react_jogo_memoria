import { NotificationManager } from "../components/Common/ReactNotifications";

export const success = msg => {
  NotificationManager.success(null, msg, 3000, null, null, null);
};

export const error = msg => {
  NotificationManager.error(null, msg, 3000, null, null, null);
};

export const warning = msg => {
  NotificationManager.warning(null, msg, 3000, null, null, null);
};
