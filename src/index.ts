import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PushSubscription } from "web-push";
import path from "path";
import "dotenv/config";
import {
  getAllSubscriptions,
  saveSubscrition,
} from "./repositories/subscriptionRepository";
import { sendNotification } from "./services/sendNotificationService";

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/views/index.html"));
});

app.post("/save-subscription", async (req, res) => {
  const subscription: PushSubscription = req.body;
  await saveSubscrition(subscription);
  res.json({ message: "success" });
});

app.get("/send-notification", async (req, res) => {
  const message = <string>req.query.message || "";

  const data = await getAllSubscriptions();

  data.forEach((device) => {
    sendNotification(device.subscription, message);
  });

  res.json({ message: "message sent" });
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
