import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <main className='note'>
                <div className='notfound__container container'>
                    <h1>404 Not Found</h1>
                    <p>Tidak ada halaman yang ditemukan</p>
                    <Link to='/' className='btn-primary'>
                        Kembali ke Halaman Utama
                    </Link>
                </div>
            </main>
        </>
    );
}

export default NotFound;
