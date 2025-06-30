import express from 'express';
import { createNote, getAllNotes, getNoteById } from '../controllers/notesController.js';


const notesRouter = express.Router();


notesRouter.get('/', getAllNotes);
notesRouter.get('/:id', getNoteById);
notesRouter.post('/', createNote);
notesRouter.put('/:id', (req, res) => res.send('update note'));
notesRouter.delete('/:id', (req, res) => res.send('delete note'));

export default notesRouter;