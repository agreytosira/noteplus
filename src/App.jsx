import React, { Component, useEffect, useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ArchivedPage from './pages/ArchivedPage';
import AddPage from './pages/AddPage';
import NotFound from './components/NotFound';
import PropTypes from 'prop-types';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';

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
            authedUser: null,
            initializing: true
        };

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async componentDidMount() {
        const { data } = await getUserLogged();
        this.setState(() => {
            return {
                authedUser: data,
                initializing: false
            };
        });
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        this.setState(() => {
            return {
                authedUser: data
            };
        });
    }

    onLogout() {
        this.setState(() => {
            return {
                authedUser: null
            };
        });
        putAccessToken('');
    }

    render() {
        if (this.state.initializing) {
            return null;
        }

        if (this.state.authedUser === null) {
            return (
                <div className='contact-app'>
                    <header className='contact-app__header'>
                        <h1>Aplikasi Kontak</h1>
                    </header>
                    <main>
                        <Routes>
                            <Route path='/*' element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                            <Route path='/register' element={<RegisterPage />} />
                        </Routes>
                    </main>
                </div>
            );
        }

        const { toggleTheme, theme } = this.props;

        return (
            <>
                <Header toggleTheme={toggleTheme} theme={theme} />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/archived' element={<ArchivedPage />} />
                    <Route path='/note/:id' element={<DetailPage />} />
                    <Route path='/add' element={<AddPage />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </>
        );
    }
}

NoteApp.propTypes = {
    navigate: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired
};

export default NoteAppWrapper;
