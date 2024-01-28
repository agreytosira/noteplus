import React, { Component } from 'react';
import getInitialData from './../utils/data';
import FloatingButton from './FloatingButton';
import Header from './Header';
import NoteAddModal from './NoteAddModal';
import NoteContainer from './NoteContainer';

export class NoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            isModalOpen: false
        };

        this.openModalHandler = this.openModalHandler.bind(this);
    }

    openModalHandler() {
        this.setState((prevState) => ({
            isModalOpen: !prevState.isModalOpen
        }));
    }

    render() {
        return (
            <>
                <Header />
                <NoteContainer notes={this.state.notes} />
                <FloatingButton handler={this.openModalHandler} />
                {this.state.isModalOpen && <NoteAddModal handler={this.openModalHandler} />}
            </>
        );
    }
}

export default NoteApp;
