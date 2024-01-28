import React from 'react';
import NoteList from './NoteList';

function NoteContainer({ notes }) {
    return (
        <>
            <main className='note'>
                <section className='note__container container'>
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={notes} />
                </section>
                <section className='note__container container'>
                    <h2>Arsip Catatan</h2>
                    <NoteList notes={notes} />
                </section>
            </main>
        </>
    );
}

export default NoteContainer;
