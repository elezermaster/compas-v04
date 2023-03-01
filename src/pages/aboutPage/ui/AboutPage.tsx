import React from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');
    // eslint-disable-next-line implicit-arrow-linebreak
    return (
        <div className="about-page">
            <div>

                {t('About page')}
            </div>
            <div>

                {t('About page')}
            </div>
            <div>

                {t('About page')}
            </div>
        </div>
    );
};

export default AboutPage;
