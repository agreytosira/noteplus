import React, { Component } from 'react';
import Swal from 'sweetalert2';

class AddNodeModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            charactersLeft: 50
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
        this.props.onAddNote(this.state);

        Swal.fire({
            title: 'Berhasil Tambah Catatan',
            text: `Catatan dengan judul ${this.state.title} berhasil ditambahkan`,
            icon: 'success',
            timer: 1000
        });
        this.props.closeModalHandler();
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
                    <button className='close-button' onClick={this.props.closeModalHandler}></button>
                </div>
            </div>
        );
    }
}

export default AddNodeModal;
