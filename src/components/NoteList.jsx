import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteList({ notes, initializing }) {
    if (initializing) {
        return (
            <div className='loader__container'>
                <div className='loader'></div>
            </div>
        );
    }

    return <div className='note-list'>{notes.length > 0 ? notes.map((note) => <NoteItem {...note} key={note.id} id={note.id} />) : <p className='message-empty'>Tidak ada catatan</p>}</div>;
}

NoteList.propTypes = {
    notes: PropTypes.array.isRequired,
    initializing: PropTypes.bool.isRequired
};

export default NoteList;
