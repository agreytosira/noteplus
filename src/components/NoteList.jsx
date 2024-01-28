import React from 'react';
import NoteItem from './NoteItem';

function filterNotesByArchived(notes, showArchived) {
    return showArchived ? notes.filter((note) => note.archived) : notes.filter((note) => !note.archived);
}

function NoteList({ notes, showArchived }) {
    const filteredNotes = filterNotesByArchived(notes, showArchived);

    return (
        <div className='note-list'>
            {filteredNotes.map((note) => (
                <NoteItem {...note} key={note.id} id={note.id} />
            ))}
        </div>
    );
}

export default NoteList;
