function Schedule() {
  return (
    <div className="flex-col justify-center py-6">
      <h2 className="font-mossport text-[64px] text-customGreen leading-mossport text-center mb-8">
        РАСПИСАНИЕ
      </h2>

      <div className="flex px-16 justify-between">
        <div className="flex-col space-y-40">
          <h3 className="font-mossport text-[48px] text-customRed leading-mossport text-center max-w-[400px]">
            20 ИЮЛЯ <br /> НЕСКУЧНЫЙ САД
          </h3>

          <img src="/logos/rogain_logo.svg" />
        </div>

        <div>
          <ScheduleRow
            time="12:00"
            event="Открытие мероприятия и регистрация"
          />
          <ScheduleRow time="12:15 — 15:30" event="Спортивный лабиринт" />
          <ScheduleRow time="12:30" event="Лекция №1" />
          <ScheduleRow
            time="13:00"
            event="Мастер-класс по ориентированию на местности, работе с картой и планированию дистанции в рогейне"
          />
          <ScheduleRow
            time="13:00"
            event="Массовый старт участников рогейна (индивидуальных участников и команд-семей)"
          />
          <ScheduleRow
            time="13:20 — 14:40"
            event="Старты участников спортивного ориентирования по возрастным группам каждые 10 минут"
          />
          <ScheduleRow time="13:30" event="Лекция №2" />
          <ScheduleRow
            time="14:00"
            event="Мастер-класс по ориентированию на местности, работе с картой и планированию дистанции в рогейне"
          />
          <ScheduleRow time="14:30" event="Лекция №3" />
          <ScheduleRow
            time="15:40 — 16:30"
            event="Лабиринт шоу с сильнейшими спортсменами"
          />
          <ScheduleRow time="16:30 — 17:00" event="Награждение" />
        </div>
      </div>
    </div>
  );
}

function ScheduleRow(props: { time: string; event: string }) {
  const { time, event } = props;

  return (
    <div className="flex space-x-5 py-3">
      <p className="font-gothamProMedium text-[24px] leading-none min-w-[170px]">
        {time}
      </p>

      <p className="font-gothamProLight text-[24px] leading-none text-start max-w-[540px]">
        {event}
      </p>
    </div>
  );
}

export default Schedule;
