import Joi from "joi";

export const RegisterSchema = Joi.object({
    full_name : Joi.string().optional(),
    email : Joi.string().email(),
    password : Joi.string().min(6),
});