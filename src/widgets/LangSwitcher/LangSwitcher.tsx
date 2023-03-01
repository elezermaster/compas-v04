import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(
            i18n.language === 'ru' ? 'en'
                : (i18n.language === 'en' ? 'he'
                    : (i18n.language === 'he' ? 'ru'
                        : 'he'
                    )
                ),
        );
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {/* {t('lang')} */}
            {/* {i18n.language === 'he' ? '🇮🇱' : null}
            {i18n.language === 'ru' ? '🇷🇺' : null}
            {i18n.language === 'en' ? '🇺🇸' : null} */}
            {
                i18n.language === 'ru' ? '🇷🇺'
                    : (i18n.language === 'en' ? '🇺🇸'
                        : (i18n.language === 'he' ? '🇮🇱'
                            : '🇷🇺'
                        )
                    )
            }
        </Button>
    );
};
