import React, { Component } from 'react';
import getInitialData from './utils/data';
import FloatingButton from './components/FloatingButton';
import NoteAddModal from './components/NoteAddModal';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

export class NoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
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

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
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
                    <Route path='/' element={<HomePage notes={filteredNotes} toggleArchived={this.toggleArchivedHandler} onDelete={this.onDeleteHandler} />} />
                    <Route path='/archived' element={<HomePage notes={filteredNotes} toggleArchived={this.toggleArchivedHandler} onDelete={this.onDeleteHandler} showArchived={true} />} />
                </Routes>

                {/* <HomePage notes={filteredNotes} toggleArchived={this.toggleArchivedHandler} onDelete={this.onDeleteHandler} />
                <FloatingButton toggleHandler={this.toggleModalHandler} />
                {this.state.isModalOpen && <NoteAddModal addNote={this.onAddNoteHandler} closeHandler={this.toggleModalHandler} />} */}

                <Footer />
            </>
        );
    }
}

export default NoteApp;
