const mongoose = require("mongoose");

const CardsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Categories", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cards", CardsSchema);
