import React from 'react'
import showFormattedDate from '../utils/format'
import Swal from 'sweetalert2'

function confirmDelete(id, onDelete, title) {
  Swal.fire({
    title: 'Yakin hapus data catatan?',
    text: 'Kamu tidak akan bisa mengembalikan catatan yang sudah dihapus!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, hapus!',
    cancelButtonText: 'Batal'
  }).then((result) => {
    if (result.isConfirmed) {
      onDelete(id)
      Swal.fire({
        title: 'Berhasil!',
        text: `Catatan dengan judul ${title} berhasil dihapus`,
        icon: 'success',
        confirmButtonText: 'OK'
      })
    }
  })
}

function NoteItem({ id, title, body, createdAt, toggleArchived, onDelete, archived }) {
  return (
    <div className='note-item' id={id}>
      <div className='note-item__body'>
        <h3 className='note-item__title'>{title}</h3>
        <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
        <p className='note-item__content'>{body}</p>
      </div>
      <div className='note-item__action'>
        <button onClick={() => confirmDelete(id, onDelete, title)}>Hapus</button>
        <button onClick={() => toggleArchived(id)}>{archived ? 'Pindahkan' : 'Arsipkan'}</button>
      </div>
    </div>
  )
}

export default NoteItem
