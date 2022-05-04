const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    email: {
     type: String,
     required: [true, "Email is required"],
     unique: true, // we don't want the user to type in an email we already have
     lowercase: true,
     trim: true //removing space beginning string
    },
    passwordHash: {
      type: String,
      required: [true, "Password required"]
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
