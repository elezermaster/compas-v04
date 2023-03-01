import { RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    LOGIN = 'login',
    PROFILE = 'profile',
    CHAT = 'chat',
    DASHBOARD = 'dashboard',
    ERROR = 'error',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.CHAT]: '/chat',
    [AppRoutes.DASHBOARD]: '/dashboard',
    [AppRoutes.ERROR]: '/error',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <HomePage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <AboutPage />,
    },
    [AppRoutes.CHAT]: {
        path: RoutePath.chat,
        element: <AboutPage />,
    },
    [AppRoutes.DASHBOARD]: {
        path: RoutePath.dashboard,
        element: <AboutPage />,
    },
    [AppRoutes.ERROR]: {
        path: RoutePath.error,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
