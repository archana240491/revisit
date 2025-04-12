const Category = require('../models/Category');

exports.getAll = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

exports.create = async (req, res) => {
  const { name, itemCount, imageUrl } = req.body;
  const category = new Category({ name, itemCount, imageUrl });
  await category.save();
  res.status(201).json(category);
};

exports.update = async (req, res) => {
  const { name, itemCount, imageUrl } = req.body;
  const category = await Category.findByIdAndUpdate(
    req.params.id, { name, itemCount, imageUrl }, { new: true }
  );
  res.json(category);
};