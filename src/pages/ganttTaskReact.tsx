import React, { useState } from "react";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const GanttTaskReact: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date(2023, 4, 18, 8, 0));

  const initialTasks: Task[] = [
    {
      start: startDate,
      end: new Date(2023, 4, 18, 16, 0),
      name: "山田さんの1日の作業",
      id: "山田さんの1日の作業",
      type: "project",
      progress: 0,
      hideChildren: false,
      styles: {
        backgroundColor: "#000000"
        // barColor: "#42a5f5",
        // barProgressColor: "#90caf9"
      }
    },
    {
      start: startDate,
      end: new Date(2023, 4, 18, 9, 30),
      name: "山田太郎",
      id: "Task 1",
      type: "task",
      progress: 50,
      project: "ProjectA",
      styles: { progressColor: "#42a5f5", progressSelectedColor: "#90caf9" }
    },
    {
      // 時間指定できるよｓ
      start: startDate,
      end: new Date(2023, 4, 18, 10, 30),
      name: "山田太郎",
      id: "Task 2",
      type: "task",
      progress: 60,
      project: "ProjectA",
      dependencies: ["Task 1"],
      styles: { progressColor: "#42a5f5", progressSelectedColor: "#90caf9" }
    },
    {
      start: startDate,
      end: new Date(2023, 4, 18, 11, 30),
      name: "山田太郎",
      id: "Task 3",
      type: "task",
      progress: 70,
      project: "ProjectA",
      dependencies: ["Task 2"],
      styles: { progressColor: "#42a5f5", progressSelectedColor: "#90caf9" }
    },
    {
      start: startDate,
      end: new Date(2023, 4, 19),
      name: "田中まことさんの1日の作業",
      id: "田中まことさんの1日の作業",
      type: "project",
      progress: 0,
      hideChildren: false,
      styles: {
        backgroundColor: "#000000"
        // barColor: "#42a5f5",
        // barProgressColor: "#90caf9"
      }
    },
    {
      start: startDate,
      end: new Date(2023, 4, 18, 12, 30),
      name: "田中まこと",
      id: "Task 4",
      type: "task",
      progress: 80,
      project: "ProjectB",
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" }
    },
    {
      start: startDate,
      end: new Date(2023, 4, 18, 13, 30),
      name: "Cさん - タスク",
      id: "Task 5",
      type: "task",
      progress: 90,
      project: "ProjectC",
      styles: { progressColor: "#bb54ff", progressSelectedColor: "#9e0dff" }
    }
  ];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleTaskChange = (task: Task) => {
    const updatedTasks = tasks.map((t) => (t.id === task.id ? task : t));
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (task: Task) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
  };

  const handleNextDay = () => {
    console.log(new Date(startDate.getTime() + 24 * 60 * 60 * 1000));
    // setStartDate(new Date(startDate.getTime() + 24 * 60 * 60 * 1000));
  };

  const handleTaskCreate = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div style={{ padding: "32px" }}>
      <button onClick={handleNextDay}>テスト</button>
      <Gantt
        tasks={tasks}
        viewMode={ViewMode.Hour}
        onDateChange={handleTaskChange}
        onProgressChange={handleTaskChange}
        onDoubleClick={handleTaskCreate}
        onDelete={handleTaskDelete}
        headerHeight={60}
        columnWidth={30}
      />
    </div>
  );
};

export default GanttTaskReact;
