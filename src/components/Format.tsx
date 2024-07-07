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
    <div className="flex overflow-auto py-6">
      <div className="flex divide-gray-200">
        <AccordionSection
          title="Section 1"
          isOpen={openSection === "Section 1"}
          onClick={() => handleOpenSection("Section 1")}
        >
          Content for Section 1
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
    <div className="flex flex-row items-center">
      <button className="py-2 px-4 bg-gray-200 text-gray-700" onClick={onClick}>
        {title}
      </button>
      <div
        style={{ width: isOpen ? "200px" : "0", transition: "width 0.3s ease" }}
        className="overflow-hidden bg-gray-100"
      >
        <div className="p-4 min-w-[200px]">{children}</div>
      </div>
    </div>
  );
}

export default Format;
