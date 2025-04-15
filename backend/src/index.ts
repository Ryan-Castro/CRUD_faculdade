import express  from "express";
import router from "./routes/router";
import { json, urlencoded } from "body-parser";
import db from "./database/database";
import cors from "cors";

const app = express();

app.use(json());
app.use(urlencoded({extended:true}))
app.use(cors())

db.once('open', ()=>{
    console.log('Database connected successfully!');
});

app.use("/", router)

app.listen(8080, ()=>{
    console.log("Listening to port 8080")
})
