// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="
      min-h-screen
      flex
      flex-col
      justify-center
      items-center
      bg-gray-50
      dark:bg-gray-900
      px-4
    ">
            <div className="
        max-w-md
        w-full
        bg-white
        dark:bg-gray-800
        shadow-xl
        rounded-2xl
        p-8
        text-center
      ">
                <div className="flex justify-center mb-6">
                    <AlertTriangle
                        className="
              w-24
              h-24
              text-red-500
              dark:text-red-400
            "
                    />
                </div>

                <h1 className="
          text-5xl
          font-bold
          mb-4
          text-gray-800
          dark:text-white
        ">
                    404
                </h1>

                <h2 className="
          text-2xl
          font-semibold
          mb-4
          text-gray-700
          dark:text-gray-200
        ">
                    Page Non Trouvée
                </h2>

                <p className="
          text-gray-600
          dark:text-gray-400
          mb-6
        ">
                    Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                </p>

                <Link
                    to="/"
                    className="
            inline-block
            bg-blue-500
            hover:bg-blue-600
            text-white
            font-bold
            py-3
            px-6
            rounded-lg
            transition
            duration-300
            ease-in-out
            transform
            hover:-translate-y-1
            hover:scale-110
          "
                >
                    Retour à l'Accueil
                </Link>
            </div>
        </div>
    );
};

export default NotFound;