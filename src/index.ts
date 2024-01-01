import routers from "./routers";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/", routers.rootRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
