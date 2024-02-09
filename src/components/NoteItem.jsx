import React from 'react';
import { showFormattedDate } from '../utils/format';
import { Link } from 'react-router-dom';

function NoteItem({ id, title, body, createdAt }) {
    return (
        <Link className='note-item' id={id} to={`/note/${id}`}>
            <div className='note-item__body'>
                <h3 className='note-item__title'>{title}</h3>
                <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
                <p className='note-item__content'>{body}</p>
            </div>
        </Link>
    );
}

export default NoteItem;
