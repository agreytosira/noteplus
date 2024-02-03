import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote } from '../utils/data';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/format';
import FloatingButton from '../components/FloatingButton';

function Detail({ onDelete, onArchive, onUnarchive }) {
    const { id } = useParams();
    const { title, body, createdAt, archived } = getNote(id);
    const navigate = useNavigate();

    const backToPrevPage = () => {
        navigate(-1);
    };

    return (
        <>
            <main className='note-detail'>
                <div className='note-detail__container container'>
                    <button className='btn-link' onClick={() => backToPrevPage()}>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z'></path>
                        </svg>{' '}
                        Kembali ke Halaman Utama
                    </button>
                    <h1>{title}</h1>
                    <span>Dibuat pada {showFormattedDate(createdAt)}</span>
                    <span className='note__status'>{archived && 'Diarsipkan'}</span>
                    <p>{body}</p>
                </div>
                <FloatingButton archived={archived} onArchive={onArchive} onUnarchive={onUnarchive} onDelete={onDelete} id={id} title={title} />
            </main>
        </>
    );
}

export default Detail;
