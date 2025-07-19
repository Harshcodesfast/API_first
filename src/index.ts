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

const handleRequest = serverless(app);

export const handler = async (event: any, context: any) => {
  return handleRequest(event, context);
};

app.get("/", (req, res) => {
  res.json({ message: "service is running" });
});
