/* eslint-disable i18next/no-literal-string */
/* eslint-disable no-unused-vars */
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useState, useContext } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
// import { SidebarContext } from 'app/providers/SidebarProvider';
import BurgerClosed from 'shared/assets/icons/burger-closed.svg';
import BurgerOpened from 'shared/assets/icons/burger-open.svg';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import HomeIcon from 'shared/assets/icons/home.svg';
import InfoIcon from 'shared/assets/icons/info.svg';
import PersonIcon from 'shared/assets/icons/person.svg';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();// 'home');
    const [collapsed, setCollapsed] = useState(false);
    // const toggleSidebar = useContext(SidebarContext);
    // console.log('collapsed from side', collapsed);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
        // useSidebar()
        // console.log('collapsed in nav',collapsed);
    };
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            {/* <button onClick={onToggle}>toggle</button> */}
            <Button
                theme={ThemeButton.CLEAR}
                onClick={onToggle}
            >
                {collapsed
                    ? (
                        <BurgerClosed
                            width={40}
                            height={40}
                            stroke="transparent"
                            fill={theme === Theme.DARK ? '#000000' : '#eeeeee'}
                        />
                    )
                    : (
                        <BurgerOpened
                            width={40}
                            height={40}
                            stroke="transparent"
                            fill={theme === Theme.DARK ? '#000000' : '#eeeeee'}
                        />
                    )}
            </Button>
            <div className={cls.links}>
                {/* HOME ICON */}
                {
                    <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                        {
                            !collapsed
                                ? (
                                    <div
                                        className={cls.iconLink}
                                    >
                                        {t('Main')}
                                    </div>
                                )
                                : (
                                    <Button
                                        theme={ThemeButton.CLEAR}
                                        // onClick={toggleTheme}
                                        className={cls.iconLink}
                                    >
                                        {theme === Theme.DARK
                                            ? (
                                                <HomeIcon
                                                    width={40}
                                                    height={40}
                                                    // eslint-disable-next-line i18next/no-literal-string
                                                    stroke="transparent"
                                                    fillOpacity="0.5"
                                                    strokeOpacity={0}
                                                />
                                            )
                                            : (
                                                <HomeIcon
                                                    // className={cls.iconLink}
                                                    width={40}
                                                    height={40}
                                                    // eslint-disable-next-line i18next/no-literal-string
                                                    stroke="transparent"
                                                    fillOpacity={1}
                                                    stroke-opacity="0"
                                                    fill="#eeeeee"
                                                /// viewBox="0 0 40 40"
                                                />
                                            )}
                                    </Button>
                                )
                        }
                    </AppLink>

                }
                {/* // INFO LINK */}
                {
                    <AppLink theme={AppLinkTheme.SECONDARY} to="/about" className={cls.mainLink}>
                        {
                            !collapsed
                                ? (
                                    <div
                                        className={cls.iconLink}
                                    >
                                        {t('About')}
                                    </div>
                                )
                                : (
                                    <Button
                                        theme={ThemeButton.CLEAR}
                                        // onClick={toggleTheme}
                                        className={cls.iconLink}
                                    >
                                        {theme === Theme.DARK
                                            ? (
                                                <InfoIcon
                                                    // className={cls.iconLink}
                                                    width={40}
                                                    height={40}
                                                    // eslint-disable-next-line i18next/no-literal-string
                                                    stroke="transparent"
                                                    fillOpacity="0.5"
                                                    strokeOpacity={0}
                                                />
                                            )
                                            : (
                                                <InfoIcon
                                                    // className={cls.iconLink}
                                                    width={40}
                                                    height={40}
                                                    // eslint-disable-next-line i18next/no-literal-string
                                                    stroke="transparent"
                                                    fillOpacity={1}
                                                    stroke-opacity="0"
                                                    fill="#eeeeee"
                                                /// viewBox="0 0 40 40"
                                                />
                                            )}
                                    </Button>
                                )
                        }

                    </AppLink>
                }

            </div>
            {/* BOTTOM LINKS */}
            <div className={cls.bottomLinks}>
                <div className={cls.iconLink}>
                    <ThemeSwitcher />
                </div>
                <div className={cls.iconLink}>
                    <LangSwitcher className={cls.lang} />
                </div>
            </div>
        </div>
    );
};
