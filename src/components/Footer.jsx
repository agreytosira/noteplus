import React from 'react';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <p>
                    Copyright &copy; {new Date().getFullYear()} - Developed by <strong>Agrey Tosira</strong> for Dicoding Submission
                </p>
            </div>
        </footer>
    );
}

export default Footer;
