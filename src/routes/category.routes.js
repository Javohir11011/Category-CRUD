import { Router } from "express";
import { deleteByIdCategory, getByIdCategory, getallCategory, newCategory, pagenationCategory, putByIdCategory, searchCategory } from "../controllers/index.js";
import { categoryMiddleware } from "../middleware/category.middleware.js";
import { CategorySchema } from "../schema/category.schema.js";




export const categoryRouter = Router()


categoryRouter.get("/all", categoryMiddleware(CategorySchema), getallCategory)
categoryRouter.get("/p", pagenationCategory)
categoryRouter.get("/:id", categoryMiddleware(CategorySchema), getByIdCategory)
categoryRouter.post("/new", categoryMiddleware(CategorySchema), newCategory)
categoryRouter.put("/:id",  categoryMiddleware(CategorySchema), putByIdCategory)
categoryRouter.delete("/del/:id", categoryMiddleware(CategorySchema), deleteByIdCategory)
categoryRouter.get("/search", searchCategory)