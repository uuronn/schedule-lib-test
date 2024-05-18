import React from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ja from "date-fns/locale/ja";

const locales = {
  ja: ja
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date()),
  getDay,
  locales
});

const events = [
  {
    id: 1,
    title: "山田太郎 - タスク1",
    start: new Date(2023, 4, 18, 9, 0),
    end: new Date(2023, 4, 18, 9, 30),
    resourceId: "r1"
  },
  {
    id: 2,
    title: "山田太郎 - タスク2",
    start: new Date(2023, 4, 18, 10, 0),
    end: new Date(2023, 4, 18, 10, 30),
    resourceId: "r1"
  },
  {
    id: 3,
    title: "山田太郎 - タスク3",
    start: new Date(2023, 4, 18, 11, 0),
    end: new Date(2023, 4, 18, 11, 30),
    resourceId: "r1"
  },
  {
    id: 4,
    title: "Bさん - タスク",
    start: new Date(2023, 4, 18, 12, 0),
    end: new Date(2023, 4, 18, 12, 30),
    resourceId: "r2"
  },
  {
    id: 5,
    title: "Cさん - タスク",
    start: new Date(2024, 5, 18, 13, 0),
    end: new Date(2024, 5, 18, 13, 30),
    resourceId: "r3"
  },
  {
    id: 5,
    title: "Cさん - タスク2",
    start: new Date(2024, 5, 18, 13, 30),
    end: new Date(2024, 5, 18, 14, 30),
    resourceId: "r3"
  }
];

const resources = [
  { resourceId: "r1", resourceTitle: "山田太郎" },
  { resourceId: "r2", resourceTitle: "Bさん" },
  { resourceId: "r3", resourceTitle: "Cさん" },
  { resourceId: "r4", resourceTitle: "山田dd太郎" },
  { resourceId: "r5", resourceTitle: "Bさaaん" },
  { resourceId: "r6", resourceTitle: "Cggさん" },
  { resourceId: "r7", resourceTitle: "aa山田太郎" },
  { resourceId: "r8", resourceTitle: "ccBさん" },
  { resourceId: "r9", resourceTitle: "ddCさん" },
  { resourceId: "r10", resourceTitle: "hy山田dd太郎" },
  { resourceId: "r11", resourceTitle: "ggBさaaん" },
  { resourceId: "r12", resourceTitle: "hhCggさん" }
];

const Test: React.FC = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={[Views.DAY, Views.WEEK, Views.MONTH]}
        defaultView={Views.DAY} // 日ビューをデフォルトに設定
        step={30} // 30分単位
        timeslots={2} // 1時間を2つの30分スロットに分割
        resources={resources}
        resourceIdAccessor="resourceId"
        resourceTitleAccessor="resourceTitle"
        style={{ height: 500 }}
        defaultDate={new Date(2024, 5, 18)} // デフォルトの日付を2023年5月18日に設定
      />
    </div>
  );
};

export default Test;
