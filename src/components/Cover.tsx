function Cover() {
  return (
    <>
      <div className="bg-[url(/cover.svg)] bg-no-repeat bg-center bg-cover lg:min-h-[705px] md:min-h-[450px] min-h-[630px]" />
      <div className="flex pt-4 justify-center md:justify-end space-x-4">
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

export default Cover;
