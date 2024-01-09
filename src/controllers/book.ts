import { Response, Request } from "express";
import { validateBook } from "../utils/validation";
import Books from "../models/books";
import { v4 } from "uuid";
interface Book {
  id: number;
  name: string;
  yearOfPublish: string;
  isPublished: boolean;
}
// const Books: Book[] = [
//   {
//     id: 1,
//     name: "Man's Story",
//     yearOfPublish: "1990",
//     isPublished: true,
//   },
//   {
//     id: 2,
//     name: "Brethe of life",
//     yearOfPublish: "2023",
//     isPublished: true,
//   },
//   {
//     id: 3,
//     name: "Tribe call judah",
//     yearOfPublish: "2024",
//     isPublished: true,
//   },
//   {
//     id: 4,
//     name: "My helper",
//     yearOfPublish: "2000",
//     isPublished: true,
//   },
// ];

export const getAllBook = async (req: Request, res: Response) => {
  const books = await Books.findAll();
  return res.status(200).json({ message: "books fetched successfully", books });
};
export const getBook = async(req: Request, res: Response) => {
  try {
    const id = req.params.id
    const book = await Books.findByPk(id);    
    if (!book)return res.status(404).send("book not found");
    res.send(book);
  } catch (error) {
    console.log("Error", error);
  }
};

export const createBook = async(req: Request, res: Response) => {
  const id = v4()
  try {
    const { name,author, yearOfPublish, isPublished } = req.body;
    const { error } = validateBook(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const book = new Books({
      id,
      name,
      author,
      yearOfPublish,
      isPublished,
    }); 
   const newBook = await book.save() 
    res.status(201).json({message: "book created successfully", newBook});
  } catch (error) {
    console.log("Error", error);
  }
};
export const upDateBook = async(req: Request, res: Response) => {
  const id = v4()
  const {  name,author, yearOfPublish, isPublished } = req.body;
  const { error } = validateBook(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const id = req.params.id
    const book =await Books.findByPk(id);
    if (!book) return res.status(404).json("book with this id cannot be found");
     const updated = await book.update(req.body)
     return res.status(200).json({mesaage:"book updated successfully", updated}) 
    
  } catch (error) {
    console.log("Error", error);
  }
};

export const deleteBook = async(req: Request, res: Response) => {
  try {
    const id = req.params.id
    const book = await Books.findByPk(id);

    if (!book) return res.status(404).json("book with this id cannot be found");
    const deletedBook= await book?.destroy(); 
    res.status(200).json({message:"book deleted sucessfully", deletedBook});
  } catch (error) {
    console.log("Error", error);
    return 
  }
};
