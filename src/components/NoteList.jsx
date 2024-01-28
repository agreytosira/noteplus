import React from 'react';
import NoteItem from './NoteItem';

function filterNotesByArchived(notes, showArchived) {
    return showArchived ? notes.filter((note) => note.archived) : notes.filter((note) => !note.archived);
}

function NoteList({ notes, showArchived, toggleArchived }) {
    const filteredNotes = filterNotesByArchived(notes, showArchived);

    return (
        <div className='note-list'>
            {filteredNotes.map((note) => (
                <NoteItem {...note} key={note.id} id={note.id} toggleArchived={toggleArchived} />
            ))}
        </div>
    );
}

export default NoteList;
