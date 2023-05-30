import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import webpush from "web-push";
import fsAsync from "fs/promises";
import path from "path";
const app = express();
// import dotenv from "dotenv";

// dotenv.config();
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
const port = 80;

console.log(process.env.DB_PATH);

// const saveToDatabase = async (subscription) => {
//   var content = {
//     subscription,
//   };

//   try {
//     let data = await fsAsync.readFile(process.env.DB_PATH, {
//       encoding: "utf8",
//     });

//     data = JSON.parse(data);
//     data = [...data, content];

//     await fsAsync.writeFile(process.env.DB_PATH, JSON.stringify(data, null, 2));
//   } catch (err) {
//     throw new Error("Erro ao salvar");
//   }
// };

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../pages/index.html"));
// });

// app.post("/save-subscription", async (req, res) => {
//   const subscription = req.body;
//   await saveToDatabase(subscription);
//   res.json({ message: "success" });
// });

// const vapidKeys = {
//   publicKey:
//     "BCOpfHL7cFEDwpg1jt15AnjKj3kgQUdQJ_hfjeBe6XcH-ep-_PF4efU87YSsTzo-mNzCZJxkELmrPR3V0HxAtXc",
//   privateKey: "pW92rRRKNQMTFU4wYOctV3Fv7Z3I-LrTSG54G1tC9J8",
// };

// webpush.setVapidDetails(
//   "mailto:isaiascxs10@gmail.com",
//   vapidKeys.publicKey,
//   vapidKeys.privateKey
// );

// const sendNotification = (subscription, dataToSend) => {
//   webpush.sendNotification(subscription, dataToSend);
// };

// app.get("/send-notification", async (req, res) => {
//   let data = await fsAsync.readFile(process.env.DB_PATH, { encoding: "utf8" });
//   data = JSON.parse(data);

//   data.forEach((device) => {
//     const message = "Teste";
//     sendNotification(device.subscription, message);
//   });

//   res.json({ message: "message sent" });
// });

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
