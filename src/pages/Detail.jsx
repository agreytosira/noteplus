import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/data';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/format';

function Detail() {
    const { id } = useParams();
    const { title, body, createdAt } = getNote(id);

    return (
        <>
            <main className='note-detail'>
                <div className='note-detail__container container'>
                    <Link to='/' className='btn-link'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z'></path>
                        </svg>{' '}
                        Kembali ke beranda
                    </Link>
                    <h1>{title}</h1>
                    <span>Dibuat pada {showFormattedDate(createdAt)}</span>
                    <p>{body}</p>
                </div>
            </main>
        </>
    );
}

export default Detail;
