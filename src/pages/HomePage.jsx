import React, { Component } from 'react';
import NoteList from '../components/NoteList';
import { useSearchParams, Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/network-data';
import FloatingButton from '../components/FloatingButton';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocaleContext';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

export class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchKeyword: props.defaultKeyword || '',
            notes: [],
            initializing: true
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.fetchNotes = this.fetchNotes.bind(this);
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
        await getActiveNotes()
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
        const filteredNotes = notes ? notes.filter((note) => note.title.toLowerCase().includes(searchKeyword.toLowerCase())) : '';

        return (
            <LocaleConsumer>
                {({ locale }) => {
                    return (
                        <>
                            <main className='note'>
                                <section className='note__container container'>
                                    <div className='note__navigation'>
                                        <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
                                        <nav>
                                            <ul>
                                                <li>
                                                    <Link to='/' className='active'>
                                                        {locale === 'id' ? 'Sedang Aktif' : 'Currently Active'}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/archived'> {locale === 'id' ? 'Diarsipkan' : 'Archived'}</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <SearchBar searchHandler={this.onSearchHandler} searchKeyword={searchKeyword} />
                                    <NoteList notes={filteredNotes} initializing={initializing} />
                                </section>
                            </main>
                            <FloatingButton isAddLink={true} />
                        </>
                    );
                }}
            </LocaleConsumer>
        );
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired
};

export default HomePageWrapper;
