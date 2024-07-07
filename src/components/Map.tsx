import React from "react";

function Map() {
  return (
    <div className="flex space-x-32 px-16 py-6">
      <div className="flex-col space-y-5 max-w-[370px] py-10">
        <h2 className="font-mossport text-[64px] text-customGreen leading-mossport text-left mb-8">
          ГДЕ НАС НАЙТИ?
        </h2>

        <div>
          <p className="font-gothamProBold text-[24px] text-left">Эл. почта</p>
          <p className="font-gothamProMedium text-[24px] text-left underline">
            <a href="mailto:orient.moscow@yandex.ru">orient.moscow@yandex.ru</a>
          </p>
        </div>

        <div>
          <p className="font-gothamProBold text-[24px] text-left">
            Место проведения
          </p>
          <p className="font-gothamProMedium text-[24px] text-left">
            НЕСКУЧНЫЙ САД И ВОРОБЬЕВЫ ГОРЫ
          </p>
        </div>
      </div>

      <iframe
        src="https://yandex.com/map-widget/v1/?um=constructor%3A61fdcacd5efbf257c3b522ad81fae5b28ba5abeef4a616ec065e9b58f46cd70f&amp;source=constructor"
        width="100%"
        height="490"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Map;
