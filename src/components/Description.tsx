function Description() {
  return (
    <div id="description" className="flex justify-between py-1">
      <div className="flex-col space-y-20">
        <h1 className="font-mossport text-[128px] text-customGreen max-w-[500px] leading-mossport text-start">
          МОСКОВСКИЙ РОГЕЙН
        </h1>

        <img src="/logos/rogain_logo.svg" />
      </div>

      <div className="flex-col space-y-20">
        <p className="font-gothamProMedium text-[24px] max-w-[600px] leading-none text-justify">
          Приглашаем всех желающих принять участие и бросить вызов соперникам в
          ежегодном дне ориентирования «Рогейн: по следам культуры»! В этому
          году для вас подготовлены старты для индивидуального участия в
          форматах «ориентирование» и «рогейн», а также отдельный семейный
          зачет! Мероприятие будет интересно для участников разного уровня
          подготовки. Также в программе ждут лекции и мастер-классы от экспертов
          в своих областях!
          <br />
          <br />
          Вход свободный. Обязательна предварительная регистрация на сайте для
          участия в соревнованиях.
        </p>

        <button className="bg-mossport text-white font-gothamProMedium text-[16px] py-3 px-5 hover:opacity-75 focus:ring-2 focus:ring-mossport focus:ring-opacity-50 active:bg-mossport-dark transition-opacity duration-150">
          РЕГИСТРАЦИЯ
        </button>
      </div>
    </div>
  );
}

export default Description;
