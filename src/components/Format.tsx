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
    <div className="flex-col py-6">
      <h2 className="font-mossport text-[64px] text-customGreen leading-mossport text-center mb-8">
        ФОРМАТЫ СОРЕВНОВАНИЙ
      </h2>

      <div className="flex divide-gray-200">
        <AccordionSection
          title="Рогейн"
          isOpen={openSection === "Section 1"}
          onClick={() => handleOpenSection("Section 1")}
        >
          <div className="grid grid-cols-2 gap-4">
            <img src="/format_images/rogain.png" alt="rogain_image" />
            <p className="font-gothamProLight leading-tight text-[16px] text-left">
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
            <p className="font-gothamProLight leading-tight text-[16px] text-left">
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
              <button className="bg-mossport text-white font-gothamProMedium text-[16px] py-3 px-5 hover:opacity-75 focus:ring-2 focus:ring-mossport focus:ring-opacity-50 active:bg-mossport-dark transition-opacity duration-150">
                РЕГИСТРАЦИЯ
              </button>
            </div>
          </div>
        </AccordionSection>
        <AccordionSection
          title="Section 2"
          isOpen={openSection === "Section 2"}
          onClick={() => handleOpenSection("Section 2")}
        >
          Content for Section 2
        </AccordionSection>
        <AccordionSection
          title="Section 3"
          isOpen={openSection === "Section 3"}
          onClick={() => handleOpenSection("Section 3")}
        >
          Content for Section 3
        </AccordionSection>
        <AccordionSection
          title="Section 4"
          isOpen={openSection === "Section 4"}
          onClick={() => handleOpenSection("Section 4")}
        >
          Content for Section 4
        </AccordionSection>

        <AccordionSection
          title="Section 5"
          isOpen={openSection === "Section 5"}
          onClick={() => handleOpenSection("Section 5")}
        >
          Content for Section 5
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
    <div className="flex flex-row items-center overflow-visible">
      <button
        style={{
          boxShadow: "inset 2px 0px 20px rgba(0, 0, 0, 0.25)",
        }}
        className="flex justify-center content-center py-2 px-4 min-w-[70px] min-h-[700px]"
        onClick={onClick}
      >
        <p
          style={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
            textAlign: "center",
          }}
          className="font-mossport uppercase text-[48px] leading-none text-accordionGreen"
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
        className="overflow-hidden min-h-[700px]"
      >
        <div className="p-8 min-w-[780px]">{children}</div>
      </div>
    </div>
  );
}

export default Format;
