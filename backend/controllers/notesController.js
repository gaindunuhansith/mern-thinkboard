import Note from '../models/Note.js';

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); 
        res.status(200).json(notes);
        
    } catch (error) {
        console.error('Error in getAllNotes controller ', error);
        res.status(500).json({ message: "Internal server error"});
    }
}