import React, { Component } from 'react';
import getInitialData from './../utils/data';
import Header from './Header';

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
                {this.state.notes.map((note) => (
                    <p>{note.title}</p>
                ))}
            </>
        );
    }
}

export default NoteApp;
