import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

console.log(process.env.URL);
app.use(
  cors({
    origin: process.env.URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import contactusRouter from "./routes/contactus.routes.js";

app.use("/api", contactusRouter);

export { app };
