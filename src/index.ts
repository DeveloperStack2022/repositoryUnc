import * as dotenv from "dotenv";
import app from "./app";
dotenv.config();

app().catch((err) => console.log("Error: "+ err))
