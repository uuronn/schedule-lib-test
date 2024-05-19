import React from "react";
import Timeline, {
  TimelineGroupBase,
  TimelineItemBase
} from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

interface Group extends TimelineGroupBase {
  id: number;
  title: string;
}

interface Item {
  id: number;
  group: number;
  title: string;
  start_time: moment.Moment;
  end_time: moment.Moment;
}

const groups: Group[] = [
  { id: 1, title: "山田太郎" },
  { id: 2, title: "Bさん" },
  { id: 3, title: "Cさん" }
];

const items: Item[] = [
  {
    id: 1,
    group: 1,
    title: "タスク1",
    start_time: moment("2023-05-18 09:00"),
    end_time: moment("2023-05-18 09:30")
  },
  {
    id: 2,
    group: 1,
    title: "タスク2",
    start_time: moment("2023-05-18 10:00"),
    end_time: moment("2023-05-18 10:30")
  },
  {
    id: 3,
    group: 1,
    title: "タスク3",
    start_time: moment("2023-05-18 11:00"),
    end_time: moment("2023-05-18 11:30")
  },
  {
    id: 4,
    group: 2,
    title: "タスク",
    start_time: moment("2023-05-18 12:00"),
    end_time: moment("2023-05-18 12:30")
  },
  {
    id: 5,
    group: 3,
    title: "タスク",
    start_time: moment("2023-05-18 13:00"),
    end_time: moment("2023-05-18 13:30")
  }
];

const ReactCalendarTimeline: React.FC = () => {
  return (
    <div>
      <h1>タイムライン例</h1>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment("2023-05-18 07:00")}
        defaultTimeEnd={moment("2023-05-18 18:00")}
        timeSteps={{
          hour: 24,
          minute: 30,
          second: 60,
          day: 30,
          year: 1,
          month: 12
        }}
      />
    </div>
  );
};

export default ReactCalendarTimeline;
