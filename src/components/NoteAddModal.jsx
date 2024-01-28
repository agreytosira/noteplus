import React, { Component } from 'react';

class NoteAddModal extends Component {
    render() {
        return (
            <div className='note-modal'>
                <div className='note-modal__container'>
                    <h2>Tambahkan Catatan</h2>
                    <form>
                        <div className='input-group'>
                            <label htmlFor='title'>Judul</label>
                            <input type='text' name='title' required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='body'>Isi Catatan</label>
                            <textarea name='body' required></textarea>
                        </div>
                        <button type='submit' className='btn-primary'>
                            Tambah Catatan
                        </button>
                    </form>
                    <button className='close-button' onClick={this.props.handler}>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z'></path>
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}

export default NoteAddModal;
