import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, isArchived }) {
    return <div className='note-list'>{isArchived ? notes.filter((note) => note.archived).map((note) => <NoteItem {...note} key={note.id} id={note.id} />) : notes.map((note) => <NoteItem {...note} key={note.id} id={note.id} />)}</div>;
}

export default NoteList;
