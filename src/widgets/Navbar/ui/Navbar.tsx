import React, { useContext, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
// import { SidebarContext,SidebarProvider, useSidebar } from 'app/providers/SidebarProvider';
import BurgerClosed from 'shared/assets/icons/burger-closed.svg';
import BurgerOpened from 'shared/assets/icons/burger-open.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();// 'home');
    // const [collapsed, setCollapsed] = useState(useContext(SidebarContext))
    // const onToggle = () => {
    //     setCollapsed(prev => !prev)
    //     //useSidebar()
    //     console.log('collapsed in nav',collapsed);

    // }
    return (
        <div className={classNames(cls.navbar, {}, [className])}>

            <div className={cls.linksRight}>

                <div className={cls.mainLink}>
                    <ThemeSwitcher />
                </div>
                <div className={cls.mainLink}>
                    <LangSwitcher className={cls.lang} />
                </div>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    {t('Main')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to="/about" className={cls.mainLink}>
                    {t('About')}
                </AppLink>
            </div>
        </div>
    );
};
