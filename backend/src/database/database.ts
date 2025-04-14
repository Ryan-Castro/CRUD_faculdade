import mongoose from "mongoose";

mongoose.connect('mongodb://mongo:27017/medi-app');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

export default db