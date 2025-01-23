import dotenv from "dotenv";
dotenv.config({
  path: "./src/.env",
});
import { app } from "./app.js";

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
