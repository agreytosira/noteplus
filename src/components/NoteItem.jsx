import React from 'react';
import showFormattedDate from '../utils/format';

function NoteItem({ id, title, body, createdAt }) {
    return (
        <div className='note-item' id={id}>
            <div className='note-item__body'>
                <h3 className='note-item__title'>{title}</h3>
                <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
                <p className='note-item__content'>{body}</p>
            </div>
            <div className='note-item__action'>
                <button>Hapus</button>
                <button>Arsipkan</button>
            </div>
        </div>
    );
}

export default NoteItem;
