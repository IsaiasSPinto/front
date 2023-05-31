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
exports.saveSubscrition = exports.getAllSubscriptions = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const dbPath = process.env.DB_PATH || "";
function getAllSubscriptions() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield promises_1.default.readFile(dbPath, { encoding: "utf8" });
        const subscriptions = JSON.parse(data) || [];
        return subscriptions;
    });
}
exports.getAllSubscriptions = getAllSubscriptions;
function saveSubscrition(subscription) {
    return __awaiter(this, void 0, void 0, function* () {
        var newSubscription = {
            date: new Date(),
            subscription,
        };
        const data = yield getAllSubscriptions();
        const newData = [...data, newSubscription];
        yield promises_1.default.writeFile(dbPath, JSON.stringify(data, null, 2));
    });
}
exports.saveSubscrition = saveSubscrition;
