export const categoryMiddleware = (schema)=>{
    return (req, res, next)=>{
        try {
            const {name, description} = schema.validate(req.body);
            next()
        } catch (error) {
            next(error)
        }
    }
}