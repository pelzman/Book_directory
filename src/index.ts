import express, { urlencoded } from "express";
import logger from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import books from "./routes/routes";
import bodyParser from "body-parser";
import { db } from "./config/database";
dotenv.config();
const app = express();
// middlewares
app.use(helmet());
app.use(express.json());
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
db.sync({})
.then(()=>console.log("connected to database"))
.catch(error => console.log("ERROR", error))
const Port = process.env.PORT || 3000;

//routes
app.use("/api/v1/books", books);

app.listen(Port, () => console.log(`server running on port ${Port}`));
