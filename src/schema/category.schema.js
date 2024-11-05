import Joi from "joi"


export const CategorySchema = Joi.object({
    name: Joi.string().min(6),
    description : Joi.string().min(10)
});