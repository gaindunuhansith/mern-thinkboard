import express from 'express';

const notesRouter = express.Router();


notesRouter.get('/', (req, res) => res.send('get all notes'));
notesRouter.get('/:id', (req, res) => res.send('get note by id'));
notesRouter.post('/', (req, res) => res.send('create note'));
notesRouter.put('/:id', (req, res) => res.send('update note'));
notesRouter.delete('/:id', (req, res) => res.send('delete note'));

export default notesRouter;