import React, { Component } from 'react';

class NoteAddModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            charactersLeft: 50 // Set nilai awal untuk karakter yang tersisa
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        const titleLength = event.target.value.length;
        if (titleLength <= 50) {
            this.setState(() => ({
                charactersLeft: 50 - titleLength,
                title: event.target.value
            }));
        }
    }

    onBodyChangeHandler(event) {
        this.setState(() => ({
            body: event.target.value
        }));
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote({
            title: this.state.title,
            body: this.state.body
        });

        this.props.closeHandler();
    }

    render() {
        const { title, body, charactersLeft } = this.state;

        return (
            <div className='note-modal'>
                <div className='note-modal__container'>
                    <h2>Tambahkan Catatan</h2>
                    <form onSubmit={this.onSubmitEventHandler}>
                        <div className='input-group'>
                            <label htmlFor='title'>Judul</label>
                            <input type='text' name='title' value={title} onChange={this.onTitleChangeHandler} required autoFocus />
                            <p className='characters-left'>Sisa Karakter: {charactersLeft}</p>
                        </div>
                        <div className='input-group'>
                            <label htmlFor='body'>Isi Catatan</label>
                            <textarea name='body' value={body} onChange={this.onBodyChangeHandler} required></textarea>
                        </div>
                        <button type='submit' className='btn-primary'>
                            Tambah Catatan
                        </button>
                    </form>
                    <button className='close-button' onClick={this.props.closeHandler}>
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
