import React from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation('home');// 'home');
    return (
        <div className="home-page">
            {t('MainPage')}

        </div>
    );
};

export default HomePage;
