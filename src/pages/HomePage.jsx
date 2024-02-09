import React, { Component } from 'react';
import NoteList from '../components/NoteList';
import { useSearchParams, Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/data';
import FloatingButton from '../components/FloatingButton';
import PropTypes from 'prop-types';

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
            notes: getActiveNotes()
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
        const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchKeyword.toLowerCase()));

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
                <FloatingButton isAddLink={true} />
            </>
        );
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired
};

export default HomePageWrapper;
