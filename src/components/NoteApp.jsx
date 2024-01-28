import React, { Component } from 'react'
import getInitialData from './../utils/data'
import FloatingButton from './FloatingButton'
import Header from './Header'
import NoteAddModal from './NoteAddModal'
import NoteContainer from './NoteContainer'

export class NoteApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: getInitialData(),
      isModalOpen: false
    }

    this.openModalHandler = this.openModalHandler.bind(this)
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    this.toggleArchivedHandler = this.toggleArchivedHandler.bind(this)
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
  }

  openModalHandler() {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen
    }))
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
            createdAt: +new Date(),
            archived: false
          }
        ]
      }
    })
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id)
    this.setState({ notes })
  }

  toggleArchivedHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            archived: !note.archived
          }
        }
        return note
      })

      return {
        notes: updatedNotes
      }
    })
  }

  render() {
    return (
      <>
        <Header />
        <NoteContainer notes={this.state.notes} toggleArchived={this.toggleArchivedHandler} onDelete={this.onDeleteHandler} />
        <FloatingButton handler={this.openModalHandler} />
        {this.state.isModalOpen && <NoteAddModal addNote={this.onAddNoteHandler} closeHandler={this.openModalHandler} />}
      </>
    )
  }
}

export default NoteApp
