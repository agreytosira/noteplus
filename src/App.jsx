import React, { Component } from 'react';
import { deleteNote, getAllNotes } from './utils/data';
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
        this.toggleArchivedHandler = this.toggleArchivedHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
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
                    title: 'Berhasil!',
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

    onSearchHandler(keyword) {
        this.setState(() => {
            return {
                searchKeyword: keyword
            };
        });
    }

    render() {
        const filteredNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));

        return (
            <>
                <Header searchHandler={this.onSearchHandler} />
                <Routes>
                    <Route path='/' element={<HomePage notes={filteredNotes} toggleArchived={this.toggleArchivedHandler} />} />
                    <Route path='/archived' element={<HomePage notes={filteredNotes} toggleArchived={this.toggleArchivedHandler} showArchived={true} />} />
                    <Route path='/note/:id' element={<Detail onDelete={this.onDeleteHandler} />} />
                </Routes>

                {/* <HomePage notes={filteredNotes} toggleArchived={this.toggleArchivedHandler} onDelete={this.onDeleteHandler} />
                <FloatingButton toggleHandler={this.toggleModalHandler} />
                {this.state.isModalOpen && <NoteAddModal addNote={this.onAddNoteHandler} closeHandler={this.toggleModalHandler} />} */}

                <Footer />
            </>
        );
    }
}

export default NoteAppWrapper;
