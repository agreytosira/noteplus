import React, { Component } from 'react';
import { deleteNote, archiveNote, getAllNotes, unarchiveNote } from './utils/data';
import FloatingButton from './components/FloatingButton';
import NoteAddModal from './components/NoteAddModal';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Swal from 'sweetalert2';

function NoteAppWrapper() {
    const navigate = useNavigate();

    return <NoteApp navigate={navigate} />;
}

export class NoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes(),
            isModalOpen: false,
            searchKeyword: ''
        };

        this.toggleModalHandler = this.toggleModalHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    }

    toggleModalHandler() {
        this.setState((prevState) => ({
            isModalOpen: !prevState.isModalOpen
        }));
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false
                    }
                ]
            };
        });
    }

    onArchiveHandler(id, title) {
        Swal.fire({
            title: 'Berhasil Arsipkan Catatan!',
            text: `Catatan dengan judul ${title} telah diarsipkan`,
            icon: 'success',
            timer: 1000
        });
        archiveNote(id);
        this.props.navigate(-1);
        this.setState(() => {
            return {
                notes: getAllNotes()
            };
        });
    }

    onUnarchiveHandler(id, title) {
        Swal.fire({
            title: 'Berhasil Aktifkan Catatan!',
            text: `Catatan dengan judul ${title} telah diaktifkan kembali`,
            icon: 'success',
            timer: 1000
        });
        unarchiveNote(id);
        this.props.navigate(-1);
        this.setState(() => {
            return {
                notes: getAllNotes()
            };
        });
    }

    onDeleteHandler(id, title) {
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
                this.props.navigate('/');
                this.setState(() => {
                    return {
                        notes: getAllNotes()
                    };
                });
            }
        });
    }

    toggleArchivedHandler(id) {
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.map((note) => {
                if (note.id === id) {
                    return {
                        ...note,
                        archived: !note.archived
                    };
                }
                return note;
            });

            return {
                notes: updatedNotes
            };
        });
    }

    render() {
        return (
            <>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/note/:id' element={<Detail onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onUnarchive={this.onUnarchiveHandler} />} />
                </Routes>

                <Footer />
            </>
        );
    }
}

export default NoteAppWrapper;
