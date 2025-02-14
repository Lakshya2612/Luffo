import { Router } from "express";
import {
  getshoes,
  getppe,
  getuniforms,
  getproductdetail,
  sendenquiry,
} from "../controllers/products.controller.js";

const router = Router();

router.route("/getshoes").get(getshoes);
router.route("/getppe").get(getppe);
router.route("/getuniforms").get(getuniforms);
router.route("/getproductdetail/:id").get(getproductdetail);
router.route("/enquiry").post(sendenquiry);

export default router;
