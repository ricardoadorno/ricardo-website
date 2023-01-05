import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

function Header() {
  const { t } = useTranslation("home");

  return (
    <header className="bg-gray-800 ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-cyan-400 uppercase text-center">
          {t("HeroTag")}
        </p>
        <h1 className="text-3xl font-bold text-white text-center mt-2">
          <span className="text-orange-400">{t("HeroSpan")}</span>
          {t("HeroTitle")}
        </h1>

        <div className="flex justify-center mt-4 gap-4">
          <p className="mt-6 max-w-lg text-md text-gray-300 text-center">
            {t("HeroParagraph")}
          </p>
        </div>

        <div className="flex justify-center mt-12 border-b-4 border-orange-500">
          <Image
            className="w-2/3 md:1/2"
            src="/images/dev_png.png"
            width={500}
            height={500}
            alt="dev_image"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
