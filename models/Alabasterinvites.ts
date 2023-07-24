import mongoose from "mongoose";

const AlabasterinvitesSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Alabasterinvites ||
  mongoose.model("Alabasterinvites", AlabasterinvitesSchema);
