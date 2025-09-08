import express from "express";
import router from "./routes/router";
import { initDb } from "./db/initDb";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());
app.use("/", router);

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});