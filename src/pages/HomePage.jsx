import React, { Component } from 'react'
import NoteList from '../components/NoteList'
import { useSearchParams, Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import { addNote, getActiveNotes } from '../utils/data'
import FloatingButton from '../components/FloatingButton'
import AddNodeModal from '../components/AddNodeModal'

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')

  function changeSearchParams(keyword) {
    setSearchParams({ keyword })
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

export class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchKeyword: props.defaultKeyword || '',
      isModalOpen: false,
      notes: getActiveNotes()
    }

    this.onSearchHandler = this.onSearchHandler.bind(this)
    this.toggleModalHandler = this.toggleModalHandler.bind(this)
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
  }

  onSearchHandler(keyword) {
    this.setState(() => ({
      searchKeyword: keyword
    }))

    this.props.keywordChange(keyword)
  }

  toggleModalHandler() {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen
    }))
  }

  onAddNoteHandler({ title, body }) {
    addNote({ title, body })

    this.setState(() => {
      return {
        notes: getActiveNotes()
      }
    })
  }

  render() {
    const { searchKeyword, notes, isModalOpen } = this.state
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchKeyword.toLowerCase()))

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
        <FloatingButton onToggleModal={this.toggleModalHandler} />
        {isModalOpen && <AddNodeModal onAddNote={this.onAddNoteHandler} closeModalHandler={this.toggleModalHandler} />}
      </>
    )
  }
}

export default HomePageWrapper
