import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import AboutPage from './pages/aboutPage/AboutPage';
import { AboutPageAsync } from './pages/aboutPage/AboutPageAsync';
import HomePage from './pages/homePage/HomePage';
import { HomePageAsync } from './pages/homePage/HomePageAsync';
import { useTheme } from "./theme/useTheme";
import { classNames } from './helpers/classNames/classNames';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link className="link" to={'/'}>Главная</Link>
            <Link className="link" to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route 
                        
                        path={'/about'} 
                        element={<AboutPageAsync 
                        />} />
                    <Route 
                        
                        path={'/'} 
                        element={<HomePageAsync 
                        />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;