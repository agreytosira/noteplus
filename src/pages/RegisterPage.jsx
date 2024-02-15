import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';

function RegisterPage() {
    const navigate = useNavigate();
    const { locale, toggleLocale } = React.useContext(LocaleContext);

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
                    {locale === 'id' ? (
                        <p>
                            Kembali ke <Link to='/'>Masuk</Link>
                        </p>
                    ) : (
                        <p>
                            Back to <Link to='/'>Login</Link>
                        </p>
                    )}
                    <button className='btn-language' onClick={toggleLocale}>
                        {locale === 'id' ? <img src='https://flagicons.lipis.dev/flags/4x3/id.svg' /> : <img src='https://flagicons.lipis.dev/flags/4x3/um.svg' />}
                    </button>
                </div>
            </section>
        </main>
    );
}

export default RegisterPage;
