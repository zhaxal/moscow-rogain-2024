import { useState } from "react";

function Format() {
  const [openSection, setOpenSection] = useState("Section 1");
  const handleOpenSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
    if (openSection === section) {
      setOpenSection("Section 1");
    }
  };

  return (
    <div className="flex-col py-6 justify-center items-center">
      <h2 className="font-mossport text-[64px] text-customGreen leading-mossport text-center mb-8">
        ФОРМАТЫ СОРЕВНОВАНИЙ
      </h2>

      <div className="flex lg:flex-row flex-col divide-gray-200 justify-center items-center">
        <AccordionSection
          title="Рогейн"
          isOpen={openSection === "Section 1"}
          onClick={() => handleOpenSection("Section 1")}
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <img src="/format_images/rogain.png" alt="rogain_image" />
            <p className="font-gothamProLight leading-none text-[16px] text-left">
              Индивидуальные участники смогут показать себя в соревнованиях
              «Рогейн: по следам культуры». Формат 2 часа пешком/бегом с 50
              контрольными пунктами, на каждом из которых спортсмену нужно будет
              ответить на вопрос по теме спорта, здорового образа жизни и
              культурного наследия нашей столицы и получать дополнительные баллы
              за правильные ответы
              <br />
              <br />
              Возрастные категории:
              <br /> 0-16 лет;
              <br /> 17-34 лет;
              <br /> 35-49 лет;
              <br /> 50 лет и старше.
            </p>
            <p className="font-gothamProLight leading-none text-[16px] text-left">
              Победители награждаются в каждой возрастной группе отдельно среди
              мужчин и женщин.
              <br />
              <br />
              Все участники-финишеры получают памятную медаль!
              <br />
              <br />
              Обязательна предварительная регистрация.
              <br />
              <br />
              Без предварительной регистрации принять участие в день
              соревнования возможно только при наличии свободных мест. Данную
              информацию возможно будет уточнить у администраторов.
            </p>
            <div className="flex justify-center items-center">
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
        </AccordionSection>
        <AccordionSection
          title="Спортивный лабиринт"
          isOpen={openSection === "Section 2"}
          onClick={() => handleOpenSection("Section 2")}
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <img src="/format_images/labirinth.png" alt="labirinth_image" />
            <p className="font-gothamProLight leading-none text-[16px] text-left">
              <p className="font-gothamProMedium">
                Ориентирование в лабиринте —
              </p>
              <br />
              отличный способ потренировать свои навыки ориентировщика.
              Скоростная динамичная захватывающая дисциплина доступна как для
              новичков, так и для профессионалов.
              <br />
              <br />
              Участников ждут несколько уровней сложности карт в лабиринте.
              Можете попробовать этот формат для себя или посоревноваться с
              друзьями.
              <br />
              <br />
              Предварительная регистрация не требуется, участие в порядке живой
              очереди.
            </p>
            <p className="font-gothamProLight leading-none text-[16px] text-left">
              <p className="font-gothamProMedium">12.15 - 15:30</p>
              Время работы лабиринта
              <br />
              <br />
              <p className="font-gothamProMedium">15:40 - 16:30</p>
              Лабиринт шоу с сильнейшими спортсменами
            </p>
          </div>
        </AccordionSection>
        <AccordionSection
          title="Спортивное ориентирование"
          isOpen={openSection === "Section 3"}
          onClick={() => handleOpenSection("Section 3")}
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <img src="/format_images/orient.png" alt="orient_image" />
            <p className="font-gothamProLight leading-none text-[16px] text-left">
              Новая спортивная карта на территориях Нескучного сада и Воробьевых
              гор!
              <br />
              <br />
              Задача участников: пробежать дистанцию за минимальное время. В
              каждой возрастной категории своя дистанция.
              <br />
              Возрастные категории:
              <br />
              <br />
              0-10 лет;
              <br />
              11-12 лет;
              <br />
              13-14 лет;
              <br />
              15-16 лет;
              <br />
              17-18 лет;
              <br />
              19-39 лет;
              <br />
              40-59 лет;
              <br />
              60 лет и старше.
            </p>
            <p className="font-gothamProLight leading-none text-[16px] text-left">
              Победители награждаются за наилучший результат по времени за
              прохождение всех контрольных пунктов в каждой возрастной группе
              отдельно среди мужчин и женщин.
              <br />
              <br />
              Все участники-финишеры получают памятную медаль!
              <br />
              <br />
              Обязательна предварительная регистрация.
              <br />
              <br />
              Без предварительной регистрации принять участие в день
              соревнования возможно только при наличии свободных мест
            </p>
            <div className="flex justify-center items-center">
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
        </AccordionSection>
        <AccordionSection
          title="Лекторий и мастер-классы"
          isOpen={openSection === "Section 4"}
          onClick={() => handleOpenSection("Section 4")}
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <img src="/format_images/lection.png" alt="lection_image" />
            <p className="font-gothamProLight leading-none text-[16px] text-left">
              Мастер-классы по ориентированию на местности, работе с картой и
              планированию дистанции в рогейне проходят для участников разных
              уровней:
              <br />
              <br />
              - новичков (без специальных знаний);
              <br />
              <br />
              - продвинутых (с опытом).
              <br />
              <br />
              Мастер-классы для обеих групп будут проходить одновременно,
              поэтому участник сможет выбрать группу для участия на месте.
            </p>
            <p className="font-gothamProLight leading-none text-[16px] text-left">
              3 интересных лекции-выступления от спортсменов, тренеров,
              организаторов из мира ориентирования, рогейна и спортивного
              туризма. Темы и имена спикеров будет опубликованы в ближайшее
              время.
            </p>
          </div>
        </AccordionSection>

        <AccordionSection
          title="Лекторий и мастер-классы"
          isOpen={openSection === "Section 5"}
          onClick={() => handleOpenSection("Section 5")}
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <img
              src="/format_images/family_rogain.png"
              alt="family_rogain_image"
            />
            <p className="font-gothamProLight leading-none text-[16px] text-left">
              Команды-семьи участвуют в соревнованиях «Рогейн: по следам
              культуры». Маршрут будет состоять из 50 контрольных пунктов, на
              каждом из которых спортсмену нужно будет ответить на вопрос по
              теме спорта, здорового образа жизни и культурного наследия нашей
              столицы.
              <br />
              <br />
              Команды-победители награждаются отдельно по традиционным правилам
              рогейна за максимальное количество собранных контрольных пунктов и
              отдельно за наибольшее количество верных ответов на предложенные
              вопросы.
            </p>
            <p className="font-gothamProLight leading-none text-[16px] text-left">
              Все участники-финишеры получают памятную медаль! Лимит на
              прохождение дистанции - 2 часа.
              <br />
              <br />
              <br />
              Обязательна предварительная регистрация.
              <br />
              <br />
              <p className="italic">
                Без предварительной регистрации принять участие в день
                соревнования возможно только при наличии свободных мест. Данную
                информацию возможно будет уточнить у администраторов.
              </p>
            </p>
            <div className="flex justify-center items-center">
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
        </AccordionSection>
      </div>
    </div>
  );
}

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionSection({
  title,
  children,
  isOpen,
  onClick,
}: AccordionSectionProps) {
  return (
    <div className="flex lg:flex-row flex-col items-center overflow-visible">
      <button
        style={{
          boxShadow: "inset 2px 0px 20px rgba(0, 0, 0, 0.25)",
        }}
        className="flex justify-center content-center py-2 px-4 lg:min-w-[70px] lg:min-h-[700px] md:min-w-[756px] min-w-[300px]"
        onClick={onClick}
      >
        <p
          style={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
            textAlign: "center",
          }}
          className="font-mossport uppercase text-[48px] leading-none text-accordionGreen lg:block hidden"
        >
          {title}
        </p>

        <p className="font-mossport uppercase md:text-[48px] text-3xl leading-none text-accordionGreen lg:hidden block">
          {title}
        </p>
      </button>
      <div
        style={{
          maxWidth: isOpen ? "780px" : "0",
          transition: "max-width 0.3s ease",
          boxShadow:
            "inset 6px 6px 8px rgba(0, 0, 0, 0.25), inset -6px -6px 8px rgba(0, 0, 0, 0.25)",
        }}
        className="overflow-hidden min-h-[700px] lg:block hidden"
      >
        <div className="p-8 min-w-[780px]">{children}</div>
      </div>

      <div
        style={{
          maxHeight: isOpen ? "724px" : "0",
          transition: "max-height 0.3s ease",
          boxShadow:
            "inset 6px 6px 8px rgba(0, 0, 0, 0.25), inset -6px -6px 8px rgba(0, 0, 0, 0.25)",
        }}
        className="overflow-hidden max-w-[756px] lg:hidden md:block hidden"
      >
        <div className="p-8 min-h-[724px] max-w-[756px]">{children}</div>
      </div>

      <div
        style={{
          maxHeight: isOpen ? "1060px" : "0",
          transition: "max-height 0.3s ease",
          boxShadow:
            "inset 6px 6px 8px rgba(0, 0, 0, 0.25), inset -6px -6px 8px rgba(0, 0, 0, 0.25)",
        }}
        className="overflow-hidden max-w-[300px] lg:hidden md:hidden block"
      >
        <div className="p-8 min-h-[1060px] max-w-[300px]">{children}</div>
      </div>
    </div>
  );
}

export default Format;
