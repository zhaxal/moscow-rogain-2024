function Footer() {
  return (
    <>
      <div className="bg-gray-100 h-[1px]" />
      <div className="flex py-4 lg:justify-start justify-center space-x-4">
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
    </>
  );
}

export default Footer;
