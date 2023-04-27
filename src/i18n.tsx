
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from './common/translation/en/translation.json';
import translationKorean from './common/translation/kr/translation.json';
import translationRussian from './common/translation/ru/translation.json';

const resources = {
    en: {
        translation: translationEnglish,
    },
    kr: {
        translation: translationKorean,
    },
    ru: {
        translation: translationRussian,
    },
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru", //default language
    });

export default i18next;