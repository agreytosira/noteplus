import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/data';
import FloatingButton from '../components/FloatingButton';
import Swal from 'sweetalert2';
import JoditEditor from 'jodit-react';
import ContentEditable from 'react-contenteditable';
import PropTypes from 'prop-types';

function AddPageWrapper() {
    const navigate = useNavigate();

    return (
        <>
            <AddPage navigate={navigate} />
        </>
    );
}

class AddPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };

        this.editorRef = React.createRef();
        this.titleAddRef = React.createRef();
        this.onAddHandler = this.onAddHandler.bind(this);
        this.onCancelHandler = this.onCancelHandler.bind(this);
        this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
        this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
    }

    componentDidMount() {
        if (this.titleAddRef.current) {
            this.titleAddRef.current.focus();
        }
    }

    onAddHandler() {
        const { title, body } = this.state;

        if (title === '' || body === '') {
            Swal.fire({
                title: 'Isi Judul dan Catatan',
                text: `Judul dan isi catatan tidak boleh kosong!`,
                icon: 'warning',
                timer: 1000
            });
            return false;
        }

        addNote(this.state);
        this.props.navigate('/');

        Swal.fire({
            title: 'Berhasil Tambah Catatan!',
            text: `Catatan dengan judul ${title} berhasil ditambahkan!`,
            icon: 'success',
            timer: 1000
        });
    }

    onChangeTitleHandler(event) {
        const title = event.target.value;
        this.setState({ title });
    }

    onChangeBodyHandler() {
        if (this.editorRef.current) {
            const editorValue = this.editorRef.current.value;
            const body = editorValue;
            this.setState({ body });
        }
    }

    onCancelHandler() {
        this.props.navigate(`/`);
    }

    render() {
        const { title, body } = this.state;

        return (
            <>
                <main className='note-detail'>
                    <div className='note-detail__container container'>
                        <span className='pages-info'>TAMBAH CATATAN</span>
                        <ContentEditable className='note-input__title' innerRef={this.titleAddRef} html={title} onChange={this.onChangeTitleHandler} />
                        <JoditEditor ref={this.editorRef} value={body} onChange={this.onChangeBodyHandler} />
                    </div>
                    <FloatingButton title={title} onCancel={this.onCancelHandler} onAdd={this.onAddHandler} />
                </main>
            </>
        );
    }
}

AddPage.propTypes = {
    navigate: PropTypes.func.isRequired
};

export default AddPageWrapper;
