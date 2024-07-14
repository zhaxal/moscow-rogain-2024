import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRouter from "./src/routes/auth";
import questionRouter from "./src/routes/question";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const apiRouter = express.Router();

app.use(cors({ origin: "*" }));
app.use(express.json());

apiRouter.get("/", (req, res) => {
  res.send("Moscow Rogain 2024 API");
});

apiRouter.use("/auth", authRouter);
apiRouter.use("/question", questionRouter);

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
