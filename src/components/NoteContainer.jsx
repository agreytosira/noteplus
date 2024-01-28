import React from 'react';

function NoteContainer() {
    return (
        <>
            <main className='note'>
                <section className='note__container container'>
                    <h2>Catatan Aktif</h2>
                    <div className='note-list'>
                        <div className='note-item'>
                            <div className='note-item__body'>
                                <h3 className='note-item__title'>Note Title</h3>
                                <p className='note-item__date'>25 Juli 2023</p>
                                <p className='note-item__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nihil esse ipsa eum! Non, ut. Architecto repellendus voluptates nisi tempore!</p>
                            </div>
                            <div className='note-item__action'>
                                <button>Delete</button>
                                <button>Archive</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default NoteContainer;
