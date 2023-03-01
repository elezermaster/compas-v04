import { lazy } from 'react';
// @ts-ignore
// const newLocal = lazy(() => import('./HomePage'));
// // @ts-ignore
// export const HomePageAsync = newLocal;

export const HomePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./HomePage')), 2000);
}));
