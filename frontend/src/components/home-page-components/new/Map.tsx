function Map() {
  return (
    <>
      <div className="lg:flex hidden space-x-32 px-16 py-6">
        <div className="flex-col space-y-5 max-w-[375px] py-10">
          <h2 className="font-mossport text-[64px] text-customPurple leading-mossport text-left mb-8">
            ГДЕ НАС НАЙТИ?
          </h2>

          <div>
            <p className="font-gothamProBold text-[24px] text-left">
              Эл. почта
            </p>
            <p className="font-gothamProMedium text-[24px] text-left underline">
              <a href="mailto:orientmoscow@yandex.ru">orientmoscow@yandex.ru</a>
            </p>
          </div>

          <div>
            <p className="font-gothamProBold text-[24px] text-left">
              Место проведения
            </p>
            <p className="font-gothamProMedium text-[24px] text-left">
              СК «ЛУЖНИКИ»,
              <br />
              СПОРТИВНЫЙ КОМПЛЕКС «ПОД МОСТОМ»
            </p>
          </div>
        </div>

        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3A3baefe9a798e4d04d43ec9f06fdfa76c691d4a6230d87d56fa48fb27986ab252&amp;source=constructor"
          width="100%"
          height="490"
          frameBorder="0"
        ></iframe>
      </div>

      <div className="lg:hidden md:block pt-14 pb-7 px-4">
        <h2 className="font-mossport text-[64px] text-customPurple leading-mossport text-left">
          ГДЕ НАС НАЙТИ?
        </h2>
      </div>

      <iframe
        className="lg:hidden md:block sm:block mb-8"
        src="https://yandex.com/map-widget/v1/?um=constructor%3A3baefe9a798e4d04d43ec9f06fdfa76c691d4a6230d87d56fa48fb27986ab252&amp;source=constructor"
        width="100%"
        height="490"
        frameBorder="0"
      ></iframe>

      <div className="lg:hidden md:flex-col space-y-5 max-w-[370px] px-7 mb-8">
        <div>
          <p className="font-gothamProBold md:text-[24px] text-left">
            Эл. почта
          </p>
          <p className="font-gothamProMedium md:text-[24px] text-left underline">
            <a href="mailto:orientmoscow@yandex.ru">orientmoscow@yandex.ru</a>
          </p>
        </div>

        <div>
          <p className="font-gothamProBold md:text-[24px] text-left">
            Место проведения
          </p>
          <p className="font-gothamProMedium text-[24px] text-left">
            СК «ЛУЖНИКИ»,
            <br />
            СПОРТИВНЫЙ КОМПЛЕКС «ПОД МОСТОМ»
          </p>
        </div>
      </div>
    </>
  );
}

export default Map;
