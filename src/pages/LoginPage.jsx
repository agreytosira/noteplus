import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';

function LoginPage({ loginSuccess }) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <main>
            <section className='login'>
                <div className='login__container'>
                    <h1 className='header__brand'>
                        <Link to='/'>
                            Note<span>Plus</span>
                        </Link>
                    </h1>
                    <LoginInput login={onLogin} />
                    <p>
                        Belum punya akun? <Link to='/register'>Daftar di sini.</Link>
                    </p>
                </div>
            </section>
        </main>
    );
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired
};

export default LoginPage;
