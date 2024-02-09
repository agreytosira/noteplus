import React, { Component, useEffect, useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ArchivedPage from './pages/ArchivedPage';
import EditPage from './pages/EditPage';
import AddPage from './pages/AddPage';

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
    render() {
        const { toggleTheme, theme } = this.props;
        return (
            <>
                <Header toggleTheme={toggleTheme} theme={theme} />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/archived' element={<ArchivedPage />} />
                    <Route path='/note/:id' element={<DetailPage />} />
                    <Route path='/edit/:id' element={<EditPage />} />
                    <Route path='/add' element={<AddPage />} />
                </Routes>
                <Footer />
            </>
        );
    }
}

export default NoteAppWrapper;
