import { Router } from "express";
import { getByIdCategory, getallCategory, newCategory } from "../controllers/index.js";




export const categoryRouter = Router()


categoryRouter.get("/all", getallCategory)
categoryRouter.get("/:id", getByIdCategory)
categoryRouter.post("/new", newCategory)
categoryRouter.put("/:id", getallCategory)
categoryRouter.delete("/all", getallCategory)