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
        const note = Note.findById(req.params.id);

        if(!note) {
            return res.status(404).json({ message: "Note not found"});
        }

        res.status(200).json(note);        
    } catch (error) {
        console.error('Error in getNoteById controller ', error);
        res.status(500).json({ message: "Internal server error"});
    }
}