import React from 'react';
import NoteList from './NoteList';

function NoteContainer({ notes, toggleArchived, onDelete }) {
    return (
        <>
            <main className='note'>
                <section className='note__container container'>
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={notes} toggleArchived={toggleArchived} onDelete={onDelete} />
                </section>
                <section className='note__container container'>
                    <h2>Arsip Catatan</h2>
                    <NoteList notes={notes} showArchived={true} toggleArchived={toggleArchived} onDelete={onDelete} />
                </section>
            </main>
        </>
    );
}

export default NoteContainer;
