import React, { Component } from 'react';
import NoteList from '../components/NoteList';
import { useSearchParams, Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/data';
import PropTypes from 'prop-types';

function ArchivedPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <ArchivedPage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

export class ArchivedPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchKeyword: props.defaultKeyword || '',
            notes: getArchivedNotes()
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler(keyword) {
        this.setState(() => ({
            searchKeyword: keyword
        }));

        this.props.keywordChange(keyword);
    }

    render() {
        const { searchKeyword, notes } = this.state;
        const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));

        return (
            <>
                <main className='note'>
                    <section className='note__container container'>
                        <div className='note__navigation'>
                            <h2>Arsip Catatan</h2>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to='/'>Sedang Aktif</Link>
                                    </li>
                                    <li>
                                        <Link to='/archived' className='active'>
                                            Diarsipkan
                                        </Link>
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

ArchivedPage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired
};

export default ArchivedPageWrapper;
