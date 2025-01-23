import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config({
  path: "./src/.env",
});
const app = express();

app.use(
  cors({
    origin: process.env.URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

import contactusRouter from "./routes/contactus.routes.js";

app.use("/api", contactusRouter);

export { app };
