import React, { Component } from 'react';
import getInitialData from './utils/data';
import FloatingButton from './components/FloatingButton';
import Header from './components/Header';
import NoteAddModal from './components/NoteAddModal';
import NoteContainer from './components/NoteContainer';
import Footer from './components/Footer';

export class NoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            isModalOpen: false,
            searchKeyword: ''
        };

        this.openModalHandler = this.openModalHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.toggleArchivedHandler = this.toggleArchivedHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    openModalHandler() {
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
                <NoteContainer notes={filteredNotes} toggleArchived={this.toggleArchivedHandler} onDelete={this.onDeleteHandler} />
                <FloatingButton openHandler={this.openModalHandler} />
                {this.state.isModalOpen && <NoteAddModal addNote={this.onAddNoteHandler} closeHandler={this.openModalHandler} />}
                <Footer />
            </>
        );
    }
}

export default NoteApp;
