const Categories = require("../models/categories");

// Get All Categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create Category
exports.createCategory = async (req, res) => {
  try {
    const category = new Categories(req.body);
    await category.save();
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
