
import Joi from "joi"

interface  Book {
 name:string,
 author:string
 yearOfPublish: string,
 isPublished: boolean
}
 export const validateBook = (book:Book )=>{
    const schema = Joi.object({
        name: Joi.string().min(5).max(255).required(),
        author: Joi.string().min(5).max(255).required(),
        yearOfPublish: Joi.string(),
        isPublished: Joi.boolean()

    })
    return schema.validate(book)
 }



