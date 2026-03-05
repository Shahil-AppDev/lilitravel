import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to Lili Travel",
      "explore": "Explore Destinations",
      "guides": "Travel Guides",
      "excursions": "Excursions",
      "stays": "Stays",
      "about": "About",
      "map": "Map",
      "profile": "Profile",
      "dashboard": "Dashboard",
      "login": "Login",
      "logout": "Logout",
      "language": "Language"
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue sur Lili Travel",
      "explore": "Explorer les destinations",
      "guides": "Guides de voyage",
      "excursions": "Excursions",
      "stays": "Séjours",
      "about": "À propos",
      "map": "Carte",
      "profile": "Profil",
      "dashboard": "Tableau de bord",
      "login": "Connexion",
      "logout": "Déconnexion",
      "language": "Langue"
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido a Lili Travel",
      "explore": "Explorar destinos",
      "guides": "Guías de viaje",
      "excursions": "Excursiones",
      "stays": "Alojamientos",
      "about": "Sobre mí",
      "map": "Mapa",
      "profile": "Perfil",
      "dashboard": "Panel de control",
      "login": "Iniciar sesión",
      "logout": "Cerrar sesión",
      "language": "Idioma"
    }
  },
  ru: {
    translation: {
      "welcome": "Добро пожаловать в Lili Travel",
      "explore": "Исследовать",
      "guides": "Путеводители",
      "excursions": "Экскурсии",
      "stays": "Жилье",
      "about": "О нас",
      "map": "Карта",
      "profile": "Профиль",
      "dashboard": "Панель управления",
      "login": "Войти",
      "logout": "Выйти",
      "language": "Язык"
    }
  },
  // Add other languages as needed for MVP demo
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
