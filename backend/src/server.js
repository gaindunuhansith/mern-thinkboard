import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});


//connect to database then starting the server
connectDB().then(() => {
        app.listen(PORT, () => {
        console.log(`Server is running on localhost:${PORT}`);
    });
});



