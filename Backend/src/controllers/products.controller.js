import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendEmail } from "../utils/sendEmail.js";

const getshoes = asyncHandler(async (req, res) => {
  const shoes = await Product.find({ type: "safety shoes" });
  if (!shoes || shoes.length === 0) {
    throw new ApiError(404, "No safety shoes found");
  }
  res
    .status(200)
    .json(new ApiResponse(200, shoes, "Safety shoes fetched successfully"));
});

const getppe = asyncHandler(async (req, res) => {
  const ppe = await Product.find({ type: "ppe" });
  if (!ppe || ppe.length === 0) {
    throw new ApiError(404, "No ppe found");
  }
  res.status(200).json(new ApiResponse(200, ppe, "PPE fetched successfully"));
});

const getuniforms = asyncHandler(async (req, res) => {
  const uniforms = await Product.find({ type: "uniform" });
  if (!uniforms || uniforms.length === 0) {
    throw new ApiError(404, "No uniforms found");
  }
  res
    .status(200)
    .json(new ApiResponse(200, uniforms, "Uniforms fetched successfully"));
});

const getproductdetail = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(404, "No product found");
  }
  res
    .status(200)
    .json(new ApiResponse(200, product, "product fetched successfully"));
});

const sendenquiry = asyncHandler(async (req, res) => {
  const { name, email, phone, message, productName } = req.body;
  if (
    ![name, email, phone, message, productName].every((field) => field?.trim())
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const transferMessage = `
  Name: ${name}
  Email: ${email}
  Mobile: ${phone}
  Message: ${message}
`;
  await sendEmail({
    email: process.env.RECIVER_EMAIL,
    subject: `${productName} Enquiry`,
    message: transferMessage,
  });
  return res.status(200).json(new ApiResponse(200, "Email sent successfully"));
});

export { getshoes, getppe, getuniforms, getproductdetail, sendenquiry };
