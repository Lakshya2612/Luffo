import { Router } from "express";
import { sendmail } from "../controllers/contactus.controller.js";

const router = Router();

router.route("/sendmail").post(sendmail);

export default router;
