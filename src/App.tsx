import React from 'react';
import AppRoutes from './routes';
import Header from "@/components/layout/Header";


const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark transition-colors duration-300">
            <Header />
            <main className="pt-16 animate-fade-in">
                <AppRoutes />
            </main>
        </div>
    );
};

export default App;