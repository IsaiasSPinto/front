"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const subscriptionRepository_1 = require("./repositories/subscriptionRepository");
const sendNotificationService_1 = require("./services/sendNotificationService");
const app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../src/views/index.html"));
});
app.post("/save-subscription", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subscription = req.body;
    yield (0, subscriptionRepository_1.saveSubscrition)(subscription);
    res.json({ message: "success" });
}));
app.get("/send-notification", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = req.query.message || "";
    const data = yield (0, subscriptionRepository_1.getAllSubscriptions)();
    data.forEach((device) => {
        (0, sendNotificationService_1.sendNotification)(device.subscription, message);
    });
    res.json({ message: "message sent" });
}));
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));
