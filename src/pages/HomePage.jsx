import React, { Component } from 'react';
import NoteList from '../components/NoteList';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/data';

export class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchKeyword: '',
            notes: getActiveNotes()
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler(keyword) {
        this.setState(() => ({
            searchKeyword: keyword
        }));
    }

    render() {
        const { searchKeyword, notes } = this.state;
        const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));

        return (
            <>
                <main className='note'>
                    <section className='note__container container'>
                        <div className='note__navigation'>
                            <h2>Catatan Aktif</h2>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to='/' className='active'>
                                            Sedang Aktif
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/archived'>Diarsipkan</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <SearchBar searchHandler={this.onSearchHandler} searchKeyword={searchKeyword} />
                        <NoteList notes={filteredNotes} />
                    </section>
                </main>
            </>
        );
    }
}

export default HomePage;
