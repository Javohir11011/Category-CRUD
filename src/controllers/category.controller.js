import { Category } from "../models/index.js";

export const getallCategory = async (req, res, next) => {
  try {
      const sortField = req.query.sortField;
      const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;
      const categories = await Category.find().sort({[sortField]: sortOrder });
      res.send({
          message: "GetAll",
          data: categories,
      });
  } catch (error) {
      next(error);
  }
};

export const pagenationCategory = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * limit;
    const categoryData = await Category.find().skip(skip).limit(limit);
    res.send({
        message: "Success",
        data: categoryData,
    });
} catch (error) {
    next(error);
}
};


export const getByIdCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = await Category.findById(id);
    if (!category) return res.send("category not found!");

    res.send({
      message: "GetByid",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};
export const newCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.send("Name already taken");
    }

    const category = new Category({
      name,
      description,
    });
    const saveCategory = await category.save();

    res.send({
      message: "created",
      data: saveCategory,
    });
  } catch (error) {
    next(error);
  }
};

export const putByIdCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const category = await Category.findByIdAndUpdate(id, body);
    if (!category) return res.send("category not found!");

    res.send({
      message: "Update category...",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteByIdCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = await Category.findByIdAndDelete(id);
    if (!category) return res.send("category not found!");

    res.send({
      message: "Delete category...",
    });
  } catch (error) {
    next(error);
  }
};


export const searchCategory = async (req, res, next) => {
  try {
    const filter = req.query
    const category = await Category.find({name:filter});
    if (!category) return res.send("category not found!");

    res.send({
      message: "Delete category...",
    });
  } catch (error) {
    next(error);
  }
};
