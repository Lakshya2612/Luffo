import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mrp: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sellingprice: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["safety shoes", "ppe", "uniform"],
    },
    discount: {
      type: String,
    },
    imageurl: {
      type: String,
      required: true,
    },
    sizes: {
      type: [String],
      required: true,
      enum: ["S", "M", "L", "XL", "XXL"],
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
