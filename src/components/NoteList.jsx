import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete }) {
    return <div className='note-list'>{notes.length > 0 ? notes.map((note) => <NoteItem {...note} key={note.id} id={note.id} onDelete={onDelete} />) : <p className='message-empty'>Tidak ada catatan</p>}</div>;
}

export default NoteList;
