import React, {useEffect, useState} from 'react';
import AppRoutes from './routes';
import Header from "@/components/layout/Header";
import {AnimatePresence} from "framer-motion";
import {LoadingScreen} from "@/components/sections/Loading";
import Footer from './components/layout/Footer';


const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark transition-colors duration-300">
            <AnimatePresence mode="wait">
                {loading && <LoadingScreen />}
            </AnimatePresence>
            {!loading &&  <Header /> }
            <main className="pt-16 animate-fade-in">
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
};

export default App;