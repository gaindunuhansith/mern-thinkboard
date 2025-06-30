import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import notesRouter from '../routes/notesRoutes.js';
import rateLimiter from '../middleware/rateLimiter.js';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(rateLimiter);

app.use('/api/notes', notesRouter)


//connect to database then starting the server
connectDB().then(() => {
        app.listen(PORT, () => {
        console.log(`Server is running on localhost:${PORT}`);
    });
});



