import React, { Component } from 'react';
import NoteList from '../components/NoteList';
import { useSearchParams, Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/network-data';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocaleContext';

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
            notes: [],
            initializing: true
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    componentDidMount() {
        this.fetchNotes();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.notes !== this.state.notes) {
            this.fetchNotes();
        }
    }

    async fetchNotes() {
        await getArchivedNotes()
            .then(({ data }) => {
                this.setState({ notes: data, initializing: false });
            })
            .catch((error) => {
                console.error('Gagal mengambil data catatan:', error);
            });
    }

    onSearchHandler(keyword) {
        this.setState(() => ({
            searchKeyword: keyword
        }));

        this.props.keywordChange(keyword);
    }

    render() {
        const { searchKeyword, notes, initializing } = this.state;
        const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));

        return (
            <LocaleConsumer>
                {({ locale }) => {
                    return (
                        <main className='note'>
                            <section className='note__container container'>
                                <div className='note__navigation'>
                                    <h2>{locale === 'id' ? 'Arsip Catatan' : 'Notes Archived'}</h2>
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link to='/'>{locale === 'id' ? 'Sedang Aktif' : 'Currently Active'}</Link>
                                            </li>
                                            <li>
                                                <Link to='/archived' className='active'>
                                                    {locale === 'id' ? 'Diarsipkan' : 'Archived'}
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <SearchBar searchHandler={this.onSearchHandler} searchKeyword={searchKeyword} />
                                <NoteList notes={filteredNotes} initializing={initializing} />
                            </section>
                        </main>
                    );
                }}
            </LocaleConsumer>
        );
    }
}

ArchivedPage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired
};

export default ArchivedPageWrapper;
