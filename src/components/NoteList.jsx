import React from 'react'
import NoteItem from './NoteItem'

function filterNotesByArchived(notes, showArchived) {
  return showArchived ? notes.filter((note) => note.archived) : notes.filter((note) => !note.archived)
}

function NoteList({ notes, showArchived, toggleArchived, onDelete }) {
  const filteredNotes = filterNotesByArchived(notes, showArchived)

  return <div className='note-list'>{filteredNotes.length > 0 ? filteredNotes.map((note) => <NoteItem {...note} key={note.id} id={note.id} toggleArchived={toggleArchived} onDelete={onDelete} />) : <p className='message-empty'>Tidak ada catatan</p>}</div>
}

export default NoteList
