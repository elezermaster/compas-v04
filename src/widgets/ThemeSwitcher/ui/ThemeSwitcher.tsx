import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={toggleTheme}
            >
                {theme === Theme.DARK
                    ? (
                        <DarkIcon
                            width={40}
                            height={40}
                            stroke="transparent"
                            fillOpacity="0.5"
                            strokeOpacity={0}
                        />
                    )
                    : (
                        <LightIcon
                            width={40}
                            height={40}
                            stroke="transparent"
                            fillOpacity={1}
                            stroke-opacity="0"
                            fill="#eeeeee"
                        /// viewBox="0 0 40 40"
                        />
                    )}
            </Button>
        </div>
    );
};
