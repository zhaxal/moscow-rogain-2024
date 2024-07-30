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
      <h2 className="font-mossport text-[64px] text-customPurple leading-mossport text-center mb-8">
        ФОРМАТЫ СОРЕВНОВАНИЙ
      </h2>

      <div className="flex lg:flex-row flex-col divide-gray-200 justify-center items-center">
        <AccordionSection
          color="purple"
          title="ЛАБИРИНТ ШОУ"
          isOpen={openSection === "Section 1"}
          onClick={() => handleOpenSection("Section 1")}
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <img src="/format_images/rogain.png" alt="rogain_image" />
            <p className="font-gothamProLight leading-none text-[16px] text-left">
              Готовы посоревноваться в лабиринте? Специальный формат для тех,
              кто готов показать свой максимум в соревновательном режиме!
              <br />
              <br />
              Отдельные дистанции с разделением по возрастам в несколько этапов:
              квалификация, полу-финал и финал! Несколько забегов с
              захватывающей борьбой и непредсказуемым финалом.
              <br />
              <br />
              Даже если вы не готовы соревноваться сами, то рекомендуем
              присутствовать в качестве зрителя или болельщика, накал борьбы
              будет обеспечен!
            </p>
            <p className="font-gothamProLight leading-none text-[16px] text-left">
              Возрастные категории:
              <br />
              Девочки до 12 лет
              <br />
              Мальчики до 12 лет
              <br />
              Девушки 13-17 лет
              <br />
              Юноши 13-17 лет
              <br />
              Женщины старше 18 лет
              <br />
              Мужчины старше 18 лет
              <br />
              <br />
              Победители и призёры награждаются за наилучший результат по
              времени финального забега в каждой возрастной группе отдельно
              среди мужчин и женщин.
            </p>
            <div className="flex justify-center items-center">
              <button
                onClick={() =>
                  window.open(
                    "https://orgeo.ru/event/36882",
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
          color="purple"
          title="СПОРТИВНЫЙ ЛАБИРИНТ"
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
              Количество попыток - не ограничено!
            </p>
            <p className="font-gothamProLight leading-none text-[16px] text-left">
              Время работы лабиринта
              <br />
              <br />
              <p className="font-gothamProMedium">12.00 - 14:00</p>
              <p className="font-gothamProMedium">16:00 - 18:00</p>
            </p>
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
  color?: "purple" | "green";
}

function AccordionSection({
  title,
  children,
  isOpen,
  onClick,
  color,
}: AccordionSectionProps) {
  let accordionColor = "text-accordionGreen";

  if (color === "purple") {
    accordionColor = "text-customPurple";
  }

  return (
    <div className="flex lg:flex-row flex-col items-center overflow-visible">
      <button
        style={{
          boxShadow: "inset 2px 0px 20px rgba(0, 0, 0, 0.25)",
        }}
        className="flex justify-center items-center py-2 px-4 lg:min-w-[70px] lg:min-h-[700px] md:min-w-[756px] min-w-[300px]"
        onClick={onClick}
      >
        <p
          style={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
          }}
          className={`font-mossport uppercase text-[48px] leading-none ${accordionColor} lg:block hidden`}
        >
          {title}
        </p>

        <p
          className={`font-mossport uppercase md:text-[48px] text-3xl leading-none ${accordionColor} lg:hidden block`}
        >
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
