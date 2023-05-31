"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotification = void 0;
const web_push_1 = __importDefault(require("web-push"));
const vapidKeys = {
    publicKey: process.env.VAPID_PUBLIC_KEY || "",
    privateKey: process.env.VAPID_PRIVATE_KEY || "",
};
web_push_1.default.setVapidDetails("mailto:isaiascxs10@gmail.com", vapidKeys.publicKey, vapidKeys.privateKey);
function sendNotification(subscription, dataToSend) {
    web_push_1.default.sendNotification(subscription, dataToSend);
}
exports.sendNotification = sendNotification;
