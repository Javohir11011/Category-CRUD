export const authMiddleware = (schema)=>{
    return (req, res, next)=>{
        try {
            const {email, password} = schema.validate(req.body);
            next()
        } catch (error) {
            next(error)
        }
    }
}