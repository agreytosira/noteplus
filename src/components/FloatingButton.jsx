import React from 'react';

function FloatingButton({ id, title, onDelete, onArchive, onUnarchive, archived }) {
    return (
        <>
            <div className='floating-button'>
                {!archived ? (
                    <button onClick={() => onArchive(id, title)} title='Arsipkan'>
                        <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                            <path fill='none' d='M0 0h24v24H0V0z'></path>
                            <path d='M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z'></path>
                        </svg>
                    </button>
                ) : (
                    <button onClick={() => onUnarchive(id, title)} title='Aktifkan'>
                        <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                            <path fill='none' d='M0 0h24v24H0V0z'></path>
                            <path d='M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm3-5h2.55v3h2.9v-3H16l-4-4z'></path>
                        </svg>
                    </button>
                )}

                <button onClick={() => onDelete(id, title)} title='Hapus'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                        <path d='M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z'></path>
                    </svg>
                </button>
            </div>
        </>
    );
}

export default FloatingButton;
