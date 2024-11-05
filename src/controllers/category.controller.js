import {Category} from "../models/index.js";

export const getallCategory = async (req, res, next) => {
    try {
      const category = await Category.find()
      if (!category) return res.send("category not found!");
  
      res.send({
        message: "GetAll",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  };
  
  export const getByIdCategory = async (req, res, next) => {
    try {
      const id  = req.params.id
      const category = await Category.findOne(id)
      if (!category) return res.send("category not found!");
  
      res.send({
        message: "GetAll",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  };
  export const newCategory = async (req, res, next) => {
    try {
      const {name, description} = req.body
      if (!name) {
        return res.send("Name already taken");
      }
  
      const category = new Category(cate)
      const saveCategory  = await category.save()

      res.send({
        message: "created",
        data: saveCategory,
      });
    } catch (error) {
      next(error);
    }
  };