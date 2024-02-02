import React from 'react';
import NoteList from '../components/NoteList';
import { Link } from 'react-router-dom';

function HomePage({ notes, toggleArchived, onDelete, showArchived }) {
    return (
        <>
            <main className='note'>
                <section className='note__container container'>
                    <div className='note__navigation'>
                        <h2>{!showArchived ? 'Catatan Aktif' : 'Arsip Catatan'}</h2>
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/' className={!showArchived && 'active'}>
                                        Sedang Aktif
                                    </Link>
                                    <Link to='/archived' className={showArchived && 'active'}>
                                        Diarsipkan
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <NoteList notes={notes} toggleArchived={toggleArchived} onDelete={onDelete} showArchived={showArchived} />
                </section>
            </main>
        </>
    );
}

export default HomePage;