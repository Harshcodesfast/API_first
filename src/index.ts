import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

if (process.env.ENV == "local") {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

app.get("/", (req, res) => {
  res.json({ message: "service is running" });
});
