import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function Footer() {
    const { locale } = React.useContext(LocaleContext);

    return (
        <footer className='footer'>
            <div className='container'>
                {locale === 'id' ? (
                    <p>
                        Hak Cipta &copy; {new Date().getFullYear()} - Dikembangkan oleh <strong>Agrey Tosira</strong> untuk Submission Dicoding
                    </p>
                ) : (
                    <p>
                        Copyright &copy; {new Date().getFullYear()} - Developed by <strong>Agrey Tosira</strong> for Dicoding Submission
                    </p>
                )}
            </div>
        </footer>
    );
}

export default Footer;
