import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    TEXTED = 'texted',
    TEXTED_INVERTED = 'texted-inverted',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className={classNames(cls.Button, {/* [cls[theme]]: true */ }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
