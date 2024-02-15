import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function LocaleButton() {
    const { locale, toggleLocale } = React.useContext(LocaleContext);

    return (
        <button className='btn-language' onClick={toggleLocale}>
            {locale === 'id' ? <img src='https://flagicons.lipis.dev/flags/4x3/id.svg' /> : <img src='https://flagicons.lipis.dev/flags/4x3/um.svg' />}
        </button>
    );
}

export default LocaleButton;
