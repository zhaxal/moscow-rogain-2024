function Cover() {
  return (
    <>
      <div className="lg:bg-[url(/cover.svg)] md:bg-[url(/cover.svg)] bg-[url(/cover_mobile.svg)] bg-no-repeat bg-center bg-cover lg:min-h-[705px] md:min-h-[450px] min-h-[640px]" />
      <div className="pt-4 justify-center md:justify-end space-x-4 lg:flex md:hidden hidden">
        <a
          target="_blank"
          href="https://www.mos.ru/moskomsport/"
          className="flex-shrink-0"
        >
          <img className="h-8 md:h-14" src="/logos/dsg.svg" alt="DSGM" />
        </a>
        <a
          target="_blank"
          href="https://sport.moscow"
          className="flex-shrink-0"
        >
          <img
            className="h-8 md:h-14"
            src="/logos/mossport.svg"
            alt="Sport Moscow"
          />
        </a>
        <a
          target="_blank"
          href="https://mosgorsport.ru/"
          className="flex-shrink-0"
        >
          <img className="h-8 md:h-14" src="/logos/mgs.svg" alt="Mosgorsport" />
        </a>
      </div>
      <div
        id="description"
        className="flex justify-between lg:flex-row lg:pt-3 lg:px-0 lg:space-y-0 flex-col md:pt-24 md:pb-5 md:space-y-7 md:px-7 p-5"
      >
        <h1 className="font-mossport md:text-[96px] text-5xl text-customGreen max-w-[500px] leading-mossport text-start">
          ДЕНЬ ОРИЕНТИРОВАНИЯ
        </h1>

        <div className="py-4 justify-center md:justify-end space-x-4 lg:hidden flex">
          <a
            target="_blank"
            href="https://www.mos.ru/moskomsport/"
            className="flex-shrink-0"
          >
            <img className="h-8 md:h-14" src="/logos/dsg.svg" alt="DSGM" />
          </a>
          <a
            target="_blank"
            href="https://sport.moscow"
            className="flex-shrink-0"
          >
            <img
              className="h-8 md:h-14"
              src="/logos/mossport.svg"
              alt="Sport Moscow"
            />
          </a>
          <a
            target="_blank"
            href="https://mosgorsport.ru/"
            className="flex-shrink-0"
          >
            <img
              className="h-8 md:h-14"
              src="/logos/mgs.svg"
              alt="Mosgorsport"
            />
          </a>
        </div>

        <div className="flex-col md:space-y-20 space-y-12">
          <p className="font-gothamProLight text-lg md:text-[24px] lg:max-w-[600px] leading-none text-justify">
            Приглашаем всех желающих принять участие и бросить вызов соперникам
            в ежегодном дне ориентирования «Рогейн: по следам культуры»! В этому
            году для вас подготовлены старты для индивидуального участия в
            форматах «ориентирование» и «рогейн», а также отдельный семейный
            зачет! Мероприятие будет интересно для участников разного уровня
            подготовки. Также в программе ждут лекции и мастер-классы от
            экспертов в своих областях!
            <br />
            <br />
            Вход свободный. Обязательна предварительная регистрация на сайте для
            участия в соревнованиях.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://orgeo.ru/event/info/mosorient",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="bg-mossport text-white font-gothamProMedium text-[16px] py-3 px-5 hover:opacity-75 focus:ring-2 focus:ring-mossport focus:ring-opacity-50 active:bg-mossport-dark transition-opacity duration-150"
          >
            РЕГИСТРАЦИЯ
          </button>
        </div>
      </div>
    </>
  );
}

export default Cover;
