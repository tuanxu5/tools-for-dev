const Example = require("../models/example");

exports.getExample = async (req, res) => {
  try {
    const example = await Example.find();
    res.status(200).json({ success: true, data: example });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
