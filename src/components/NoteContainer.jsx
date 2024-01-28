import React from 'react';
import NoteList from './NoteList';

function NoteContainer({ notes, toggleArchived }) {
    return (
        <>
            <main className='note'>
                <section className='note__container container'>
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={notes} toggleArchived={toggleArchived} />
                </section>
                <section className='note__container container'>
                    <h2>Arsip Catatan</h2>
                    <NoteList notes={notes} showArchived={true} toggleArchived={toggleArchived} />
                </section>
            </main>
        </>
    );
}

export default NoteContainer;
