import { lazy } from "react";

//export const HomePageAsync = lazy(() => import('./HomePage'))

export const HomePageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./HomePage')), 3000)
}))