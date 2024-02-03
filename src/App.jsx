import React, { Component, useEffect, useState } from 'react';
import { deleteNote, archiveNote, getAllNotes, unarchiveNote } from './utils/data';
import FloatingButton from './components/FloatingButton';
import NoteAddModal from './components/NoteAddModal';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import ArchivedPage from './pages/ArchivedPage';

function NoteAppWrapper() {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.classList.add(theme);

        return () => {
            document.body.classList.remove(theme);
        };
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        localStorage.setItem('theme', newTheme);
    };

    return <NoteApp navigate={navigate} theme={theme} toggleTheme={toggleTheme} />;
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
        const { toggleTheme, theme } = this.props;
        return (
            <>
                <Header toggleTheme={toggleTheme} theme={theme} />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/archived' element={<ArchivedPage />} />
                    <Route path='/note/:id' element={<Detail />} />
                </Routes>
                <Footer />
            </>
        );
    }
}

export default NoteAppWrapper;
