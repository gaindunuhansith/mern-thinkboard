import Note from '../models/Note.js';

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); 
        res.status(200).json(notes);
        
    } catch (error) {
        console.error('Error in getAllNotes controller ', error);
        res.status(500).json({ message: "Internal server error"});
    }
};

export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if(!note) {
            return res.status(404).json({ message: "Note not found"});
        }

        res.status(200).json(note);        
    } catch (error) {
        console.error('Error in getNoteById controller ', error);
        res.status(500).json({ message: "Internal server error"});
    }
};

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });

        const savedNote = await note.save();
        res.status(201).json({ savedNote });
    } catch (error) {
        console.error('Error in create note controller ', error);
        res.status(500).json({ message: "Internal server error"});
    }
};