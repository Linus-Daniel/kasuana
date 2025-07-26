import  { model, Schema, models } from "mongoose";

export interface ITeam {
  name: string;
  role: string;
  description: string;
  image: string;
  createdAt: Date;
  isCoFounder: boolean;
  updatedAt: Date;
}

const TeamSchema = new Schema<ITeam>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    isCoFounder: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Team = models.Team || model<ITeam>("Team", TeamSchema);

export default Team;
