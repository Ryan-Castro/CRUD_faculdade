import express  from "express";
import router from "./routes/router";
import { json, urlencoded } from "body-parser";
import db from "./database/database";
import cors from "cors";

const app = express();

const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true // Important for allowing credentials
  }))
app.use(json());
app.use(urlencoded({extended:true}))

db.once('open', ()=>{
    console.log('Database connected successfully!');
});

app.use("/", router)

app.listen(8080, ()=>{
    console.log("Listening to port 8080")
})
