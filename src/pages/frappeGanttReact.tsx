import { FrappeGantt, Task, ViewMode } from "frappe-gantt-react";

export default function FrappeGanttReact() {
  const tasks: Task[] = [
    {
      id: "Task 1",
      name: "デザイン",
      start: "2023-05-18",
      end: "2023-05-20",
      progress: 20,
      dependencies: ""
    },
    {
      id: "Task 2",
      name: "開発",
      start: "2023-05-21",
      end: "2023-05-25",
      progress: 50,
      dependencies: "Task 1"
    },
    {
      id: "Task 3",
      name: "テスト",
      start: "2023-05-26",
      end: "2023-05-28",
      progress: 80,
      dependencies: "Task 2"
    }
  ];

  return (
    <div>
      <h1>ガントチャート例</h1>
      <FrappeGantt tasks={tasks} viewMode={ViewMode.HalfDay} />
    </div>
  );
}
