"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ReadMoreLink({ href, tkey, className }) {
  const { t, i18n } = useTranslation('common');
    return (
    <Link href={href} className={className}>
        {t(tkey)}
    </Link>
    );
}