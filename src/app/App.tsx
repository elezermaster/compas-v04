import React, { Suspense } from 'react';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/RouterProvider';
// import { SidebarContext, SidebarProvider, useSidebar } from './providers/SidebarProvider'

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            {/* <SidebarContext.Provider value={useContext(SidebarContext), useSidebar}> */}
            <Suspense fallback="">
                <Sidebar />
                <div className="content-page">
                    <Navbar />
                    <AppRouter />
                </div>
            </Suspense>

            {/* </SidebarContext.Provider> */}
        </div>
    );
};

export default App;
