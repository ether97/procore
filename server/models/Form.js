import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["incomplete", "complete"],
    },
    picturePath: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", FormSchema);

export default Form;
