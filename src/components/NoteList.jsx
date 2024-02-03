import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, toggleArchived, onDelete }) {
    return <div className='note-list'>{notes.length > 0 ? notes.map((note) => <NoteItem {...note} key={note.id} id={note.id} toggleArchived={toggleArchived} onDelete={onDelete} />) : <p className='message-empty'>Tidak ada catatan</p>}</div>;
}

export default NoteList;
