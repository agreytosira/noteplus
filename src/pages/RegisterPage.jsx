import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';

function RegisterPage() {
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate('/');
        }
    }

    return (
        <main>
            <section className='register'>
                <div className='register__container'>
                    <h1 className='header__brand'>
                        <Link to='/'>
                            Note<span>Plus</span>
                        </Link>
                    </h1>
                    <RegisterInput register={onRegisterHandler} />
                    <p>
                        Kembali ke <Link to='/'>Masuk</Link>
                    </p>
                </div>
            </section>
        </main>
    );
}

export default RegisterPage;
