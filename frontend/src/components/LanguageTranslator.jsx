import { useLanguageContext } from '../context/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// WELCOME PAGE
import welcome_bs from '../utils/Translate/bs/welcome.json';
import welcome_en from '../utils/Translate/en/welcome.json';
import welcome_de from '../utils/Translate/de/welcome.json';
import welcome_es from '../utils/Translate/sp/welcome.json';

// MAIN PAGE
import main_bs from '../utils/Translate/bs/main.json';
import main_en from '../utils/Translate/en/main.json';
import main_de from '../utils/Translate/de/main.json';
import main_es from '../utils/Translate/sp/main.json';

export const LanguageTranslator = ({ children }) => {
	const { language } = useLanguageContext();

	i18next.init({
		lng: language,
		interpolation: { escapeValue: false },
		resources: {
			bs: { welcome: welcome_bs, main: main_bs },
			en: { welcome: welcome_en, main: main_en },
			de: { welcome: welcome_de, main: main_de },
			es: { welcome: welcome_es, main: main_es }
		}
	});

	return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};
