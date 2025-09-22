'use client';
import {useTranslation} from 'react-i18next';

export default function LanguageSwitcher({onAfterChange}) {
  const {i18n} = useTranslation();

  const setLang = async (lng) => {
    if (i18n.language !== lng) {
      await i18n.changeLanguage(lng);
      onAfterChange?.(); // ej: cerrar menú mobile
    }
  };

  const btn = (lng) => (
    <button
      aria-pressed={i18n.language === lng}
      onClick={() => setLang(lng)}
      className={`px-2 py-1 rounded transition ${
        i18n.language === lng
          ? 'bg-White/20 text-White'
          : 'text-White/70 hover:text-White'
      }`}
    >
      {lng.toUpperCase()}
    </button>
  );

  return (
    <div className="flex items-center gap-2 text-sm md:text-base">
      {btn('es')}
      <span className="text-White/40">|</span>
      {btn('en')}
    </div>
  );
}
