import React from 'react';

function FloatingButton({ children, id, title, onDelete }) {
    return (
        <button className='floating-button' onClick={() => onDelete(id, title)}>
            {children}
        </button>
    );
}

export default FloatingButton;
