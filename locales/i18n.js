
import { ko } from './ko.js';
import { en } from './en.js';

const translations = { ko, en };

let currentLanguage = 'en'; // Default language

function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.split('-')[0];
}

function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        document.documentElement.lang = lang;
        localStorage.setItem('user-language', lang);

        // Update active class on buttons
        document.querySelectorAll('.language-switcher button').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
}

function getLanguage() {
    // Check for saved user preference first
    const savedLang = localStorage.getItem('user-language');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    // Otherwise, use browser language
    const browserLang = getBrowserLanguage();
    return translations[browserLang] ? browserLang : 'en';
}

function t(key) {
    return translations[currentLanguage][key] || key;
}

function getTranslated(textObject) {
    if (typeof textObject === 'string') {
        return textObject;
    }
    return textObject[currentLanguage] || textObject['en'] || '';
}


// Initialize
setLanguage(getLanguage());

export { setLanguage, getLanguage, t, getTranslated };
