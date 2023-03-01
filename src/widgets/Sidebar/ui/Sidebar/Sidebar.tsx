import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useState, useContext } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
// import { SidebarContext } from 'app/providers/SidebarProvider';
import BurgerClosed from 'shared/assets/icons/burger-closed.svg';
import BurgerOpened from 'shared/assets/icons/burger-open.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    // const toggleSidebar = useContext(SidebarContext);
    console.log('collapsed from side', collapsed);
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
        </div>
    );
};
