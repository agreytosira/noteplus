import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes }) {
    return (
        <div className='note-list'>
            {notes.map((note) => (
                <NoteItem {...note} key={note.id} id={note.id} />
            ))}
        </div>
    );
}

export default NoteList;
