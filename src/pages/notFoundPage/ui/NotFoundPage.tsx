import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {/* {t('Page Not Found')} */}
            <div className={classNames(cls.wrapper, {}, [className])}>
                <div className={classNames(cls.bg, {}, [className])}>
                    <div className={classNames(cls.load, {}, [className])} />
                </div>
            </div>

            <div className={classNames(cls.text, {}, [className])}> Not Found... </div>
        </div>
    );
};
