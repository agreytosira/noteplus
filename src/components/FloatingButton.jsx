import React from 'react';

function FloatingButton({ onCancel, id, onEdit, title, onToggleModal, onSaveEdit, onDelete, onArchive, onUnarchive, archived }) {
    return (
        <>
            <div className='floating-button'>
                {onCancel && (
                    <button onClick={() => onCancel(id)} title='Batal Ubah' className='btn-delete'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z'></path>
                        </svg>
                    </button>
                )}

                {onEdit && (
                    <button onClick={() => onEdit(id)} title='Ubah' className='btn-edit'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z'></path>
                        </svg>
                    </button>
                )}

                {onArchive &&
                    (!archived ? (
                        <button onClick={() => onArchive(id, title)} title='Arsipkan' className='btn-archive'>
                            <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                <path fill='none' d='M0 0h24v24H0V0z'></path>
                                <path d='M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z'></path>
                            </svg>
                        </button>
                    ) : (
                        <button onClick={() => onUnarchive(id, title)} title='Aktifkan' className='btn-unarchive'>
                            <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                <path fill='none' d='M0 0h24v24H0V0z'></path>
                                <path d='M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm3-5h2.55v3h2.9v-3H16l-4-4z'></path>
                            </svg>
                        </button>
                    ))}

                {onDelete && (
                    <button onClick={() => onDelete(id, title)} title='Hapus' className='btn-delete'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z'></path>
                        </svg>
                    </button>
                )}

                {onToggleModal && (
                    <button onClick={() => onToggleModal()} title='Tambahkan' className='btn-add'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'></path>
                        </svg>
                    </button>
                )}

                {onSaveEdit && (
                    <button onClick={() => onSaveEdit()} title='Simpan Perubahan' className='btn-save'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M7 19V13H17V19H19V7.82843L16.1716 5H5V19H7ZM4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9 15V19H15V15H9Z'></path>
                        </svg>
                    </button>
                )}
            </div>
        </>
    );
}

export default FloatingButton;
