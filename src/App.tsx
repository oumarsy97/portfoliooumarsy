import React, {useEffect, useState} from 'react';
import AppRoutes from './routes';
import {AnimatePresence} from "framer-motion";
import {LoadingScreen} from "@/components/sections/Loading";


const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden selection:bg-primary/20">
            <div className="grain" />
            <AnimatePresence mode="wait">
                {loading && <LoadingScreen />}
            </AnimatePresence>
            {!loading && (
                <main className="relative">
                    <AppRoutes />
                </main>
            )}
        </div>
    );
};

export default App;