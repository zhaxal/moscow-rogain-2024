import React from "react";

function Schedule() {
  return (
    <div className="flex-col justify-center py-6">
      <h2 className="font-mossport text-[64px] text-customGreen leading-mossport text-center mb-8">
        РАСПИСАНИЕ
      </h2>

      <div className="flex md:flex-row flex-col lg:px-16 md:px-10 justify-between">
        <h3 className="font-mossport text-[48px] text-customRed leading-mossport text-center max-w-[400px] md:mb-0 mb-7">
          20 ИЮЛЯ <br /> НЕСКУЧНЫЙ САД
        </h3>

        <div>
          <ScheduleRow
            time="12:00"
            event="Открытие мероприятия и регистрация"
          />
          <ScheduleRow time="12:15 — 15:30" event="Спортивный лабиринт" />
          <ScheduleRow
            time="12:30 — 13:30"
            event={`Лекция. Цветков Максим\nРогейн - семейный вид спорта? Советы участникам рогейнов.`}
          />
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
          <ScheduleRow
            time="13:30 — 14:30"
            event={`Лекция. Трубкина Марина\nКак сориентироваться в мире ориентирования: с чего начать, куда бежать и как получить удовольствие от этого вида спорта.`}
          />
          <ScheduleRow
            time="14:00"
            event="Мастер-класс по ориентированию на местности, работе с картой и планированию дистанции в рогейне"
          />
          <ScheduleRow
            time="14:30 — 15:30"
            event={`Лекция. Митерёв Егор\nДетское ориентирование. 10 причин, почему нужно привести ребенка в ориентирование.`}
          />
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
    <div className="flex space-x-5 py-3 md:px-0 px-4">
      <p className="font-gothamProMedium md:text-[24px] text-sm leading-none md:min-w-[170px] min-w-28">
        {time}
      </p>

      <div className="font-gothamProLight md:text-[24px] text-sm leading-none text-start lg:max-w-[540px] md:max-w-[440px] max-w-56">
        {event.split("\n").map((line, index, array) => (
          <React.Fragment key={index}>
            {line}
            {index < array.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
