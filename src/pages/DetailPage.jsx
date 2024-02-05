import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote } from '../utils/data';
import { showFormattedDate } from '../utils/format';
import FloatingButton from '../components/FloatingButton';
import Swal from 'sweetalert2';
import { archiveNote, unarchiveNote, deleteNote } from '../utils/data';

function DetailPage() {
    const { id } = useParams();
    const { title, body, createdAt, archived } = getNote(id);
    const navigate = useNavigate();

    const backToPrevPage = () => {
        navigate(-1);
    };

    const onArchiveHandler = (id, title) => {
        Swal.fire({
            title: 'Berhasil Arsipkan Catatan!',
            text: `Catatan dengan judul ${title} telah diarsipkan`,
            icon: 'success',
            timer: 1000
        });
        archiveNote(id);
        navigate(-1);
    };

    const onUnarchiveHandler = (id, title) => {
        Swal.fire({
            title: 'Berhasil Aktifkan Catatan!',
            text: `Catatan dengan judul ${title} telah diaktifkan kembali`,
            icon: 'success',
            timer: 1000
        });
        unarchiveNote(id);
        navigate(-1);
    };

    const onDeleteHandler = (id, title) => {
        Swal.fire({
            title: 'Yakin hapus data catatan?',
            text: 'Kamu tidak akan bisa mengembalikan catatan yang sudah dihapus!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Berhasil Hapus Catatan!',
                    text: `Catatan dengan judul ${title} berhasil dihapus`,
                    icon: 'success',
                    timer: 1000
                });
                deleteNote(id);
                navigate('/');
            }
        });
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
                    {archived && <span className='note__status'>Diarsipkan</span>}
                    <p>{body}</p>
                </div>
                <FloatingButton archived={archived} onArchive={onArchiveHandler} onUnarchive={onUnarchiveHandler} onDelete={onDeleteHandler} id={id} title={title} />
            </main>
        </>
    );
}

export default DetailPage;
