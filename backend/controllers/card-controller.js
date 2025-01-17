const Cards = require("../models/cards");

// Get All Cards
exports.getCards = async (req, res) => {
  try {
    const cards = await Cards.find().populate("categories", "name");
    res.status(200).json({ success: true, data: cards });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create Cards
exports.createCard = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const image = req.file ? req.file.path : null;

    const cards = new Cards({ title, image, description, category });
    await cards.save();

    res.status(201).json({ success: true, data: cards });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
