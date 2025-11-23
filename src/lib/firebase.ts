// src/config/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Analytics only in browser
let analytics: unknown = null;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.log("Analytics non initialisé:", error);
  }
}

// Fonction pour enregistrer une visite
export const trackVisitor = async () => {
  // Ne pas tracker en mode développement pour éviter de polluer les données
  if (window.location.hostname === 'localhost') {
    console.log("Mode dev - tracking désactivé");
    return;
  }

  try {
    const visitorInfo = {
      timestamp: serverTimestamp(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      referrer: document.referrer || 'Direct',
      page: window.location.pathname,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    await addDoc(collection(db, "visitors"), visitorInfo);
    console.log("✅ Visite enregistrée avec succès");
  } catch (error) {
    console.error("❌ Erreur lors de l'enregistrement de la visite:", error);
  }
};

// Fonction pour tracker les sections visitées
export const trackSectionView = (sectionName: string) => {
  if (window.location.hostname === 'localhost') {
    return;
  }

  try {
    if (analytics) {
      // Utiliser l'API Analytics si disponible
      console.log(`📊 Section vue: ${sectionName}`);
    }
  } catch (error) {
    console.error("Erreur tracking section:", error);
  }
};

export { analytics, db };
export default app;