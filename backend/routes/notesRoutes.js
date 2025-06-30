import express from 'express';
import { createNote, getAllNotes, getNoteById, updateNote } from '../controllers/notesController.js';


const notesRouter = express.Router();


notesRouter.get('/', getAllNotes);
notesRouter.get('/:id', getNoteById);
notesRouter.post('/', createNote);
notesRouter.put('/:id', updateNote);
notesRouter.delete('/:id', (req, res) => res.send('delete note'));

export default notesRouter;