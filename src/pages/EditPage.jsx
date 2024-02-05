import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { editNote, getNote } from '../utils/data';
import FloatingButton from '../components/FloatingButton';
import Swal from 'sweetalert2';

function EditPageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();

    const note = getNote(id);
    const { title, body } = note;

    return (
        <>
            <EditPage navigate={navigate} id={id} note={note} title={title} body={body} />
        </>
    );
}

export class EditPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            note: props.note,
            id: props.id,
            newTitle: props.title,
            newBody: props.body
        };

        this.titleInputRef = React.createRef();
        this.onSaveEditHandler = this.onSaveEditHandler.bind(this);
        this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
        this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
        this.onCancelHandler = this.onCancelHandler.bind(this);
    }

    componentDidMount() {
        if (this.titleInputRef.current) {
            this.titleInputRef.current.focus();
        }
    }

    onSaveEditHandler() {
        let { id, newTitle, newBody, note } = this.state;

        if (newTitle === '' || newBody === '') {
            newTitle = note.title;
            newBody = note.body;

            Swal.fire({
                title: 'Isi Judul dan Isi Catatan',
                text: `Judul dan isi catatan tidak boleh kosong!`,
                icon: 'warning',
                timer: 1000
            });
            return false;
        }

        editNote(this.state);
        this.props.navigate(`/note/${id}`);
        Swal.fire({
            title: 'Berhasil Ubah Catatan!',
            text: `Catatan dengan judul ${newTitle} berhasil diubah!`,
            icon: 'success',
            timer: 1000
        });
    }

    onChangeTitleHandler(event) {
        const newTitle = event.target.innerHTML;
        this.setState({ newTitle });
        console.log(newTitle);
    }

    onChangeBodyHandler(event) {
        const newBody = event.target.innerHTML;
        this.setState({ newBody });
        console.log(newBody);
    }

    onCancelHandler(id) {
        this.props.navigate(`/note/${id}`);
    }

    render() {
        const { id, newTitle, newBody, title, body } = this.state.note;

        return (
            <>
                <main className='note-detail'>
                    <div className='note-detail__container container'>
                        <span className='pages-info'>UBAH CATATAN</span>
                        <div className='note-input__title' contentEditable onInput={this.onChangeTitleHandler} ref={this.titleInputRef} dangerouslySetInnerHTML={{ __html: !newTitle ? title : newTitle }} />
                        <div className='note-input__body' contentEditable onInput={this.onChangeBodyHandler} dangerouslySetInnerHTML={{ __html: !newBody ? body : newBody }} />
                    </div>
                    <FloatingButton id={id} newTitle={newTitle} newBody={newBody} title={title} onSaveEdit={this.onSaveEditHandler} onCancel={this.onCancelHandler} />
                </main>
            </>
        );
    }
}

export default EditPageWrapper;
