import express from 'express';
import { getAllNotes, getNoteById } from '../controllers/notesController.js';


const notesRouter = express.Router();


notesRouter.get('/', getAllNotes);
notesRouter.get('/:id', getNoteById);
notesRouter.post('/', (req, res) => res.send('create note'));
notesRouter.put('/:id', (req, res) => res.send('update note'));
notesRouter.delete('/:id', (req, res) => res.send('delete note'));

export default notesRouter;