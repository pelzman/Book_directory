import { Router } from "express";
import { getAllBook, getBook, createBook, upDateBook,deleteBook } from "../controllers/book";
const router = Router();
router.get("/", getAllBook);
router.get("/:id", getBook);
router.post("/", createBook);
router.put('/:id',upDateBook)
router.delete("/:id", deleteBook);
export default router;
