'use client';

import { I18nextProvider } from 'react-i18next';
import { ensureI18n } from '../i18n/config';

export default function I18nProvider({ children }) {
    const i18n = ensureI18n();
    return <I18nextProvider i18n={i18n}>
        {children}
    </I18nextProvider>;
}
