import { PushSubscription } from "web-push";
import fsAsync from "fs/promises";

interface Subscription {
  date: Date;
  subscription: PushSubscription;
}
const dbPath = process.env.DB_PATH || "";

async function getAllSubscriptions(): Promise<Subscription[]> {
  const data = await fsAsync.readFile(dbPath, { encoding: "utf8" });

  const subscriptions = <Subscription[]>JSON.parse(data) || [];

  return subscriptions;
}

async function saveSubscrition(subscription: PushSubscription) {
  var newSubscription: Subscription = {
    date: new Date(),
    subscription,
  };

  const data = await getAllSubscriptions();

  const newData = [...data, newSubscription];

  await fsAsync.writeFile(dbPath, JSON.stringify(data, null, 2));
}

export { getAllSubscriptions, saveSubscrition };
