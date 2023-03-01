const { Schema, model } = require("mongoose")

const characterSchema = new Schema(
  {
    name: { type: String },
    occupation: { type: String },
    weapon: { type: String },
    occupation: { type: Boolean },
  },
  {
    timestamps: true,
  }
)

const User = model("User", characterSchema)

module.exports = User
