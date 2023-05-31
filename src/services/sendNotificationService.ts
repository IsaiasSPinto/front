import webpush, { PushSubscription } from "web-push";

const vapidKeys = {
  publicKey: process.env.VAPID_PUBLIC_KEY || "",
  privateKey: process.env.VAPID_PRIVATE_KEY || "",
};

webpush.setVapidDetails(
  "mailto:isaiascxs10@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

export function sendNotification(
  subscription: PushSubscription,
  dataToSend: string
) {
  webpush.sendNotification(subscription, dataToSend);
}
