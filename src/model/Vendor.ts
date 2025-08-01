import { Schema, Document, model, models } from "mongoose";

export interface IVendor extends Document {
  name: string;
  email: string;
  phone: string;
  address: string;
  story: string;
  image: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const VendorSchema = new Schema<IVendor>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      lowercase: true,
    },
    story: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Vendor = models.Vendor || model<IVendor>("Vendor", VendorSchema);
export default Vendor;
