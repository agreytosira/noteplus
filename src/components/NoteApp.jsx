import React, { Component } from 'react';
import getInitialData from './../utils/data';

export class NoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData()
        };
    }

    render() {
        return (
            <div>
                {this.state.notes.map((note) => (
                    <p>{note.title}</p>
                ))}
            </div>
        );
    }
}

export default NoteApp;
