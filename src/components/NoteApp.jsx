import React, { Component } from 'react';
import getInitialData from './../utils/data';
import FloatingButton from './FloatingButton';
import Header from './Header';
import NoteContainer from './NoteContainer';

export class NoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData()
        };
    }

    render() {
        return (
            <>
                <Header />
                <NoteContainer notes={this.state.notes} />
                <FloatingButton />
            </>
        );
    }
}

export default NoteApp;
