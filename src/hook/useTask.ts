import { useEffect, useState } from "react";

const initialData = [
  {
    id: 1,
    name: "MKV Intranet V2",
    date: "04/06/2024 - 16/06/2024",
    assignees: [
      { name: "Alice", src: "https://i.pravatar.cc/40?img=1" },
      { name: "Bob", src: "https://i.pravatar.cc/40?img=2" },
    ],
    priority: "Medium",
    status: "in-progress",
  },
  {
    id: 2,
    name: "Design System",
    date: "23/06/2024 - 24/06/2024",
    assignees: [
      { name: "Jane", src: "https://i.pravatar.cc/40?img=3" },
      { name: "Mark", src: "https://i.pravatar.cc/40?img=4" },
    ],
    priority: "Important",
    status: "to-do",
  },
  {
    id: 3,
    name: "Medical Appointment",
    date: "16/06/2024 - 18/06/2024",
    assignees: [
      { name: "Tom", src: "https://i.pravatar.cc/40?img=5" },
      { name: "Jerry", src: "https://i.pravatar.cc/40?img=6" },
    ],
    priority: "Urgent",
    status: "completed",
  },
  {
    id: 4,
    name: "MKV Intranet V2",
    date: "04/06/2024 - 16/06/2024",
    assignees: [
      { name: "Alice", src: "https://i.pravatar.cc/40?img=1" },
      { name: "Bob", src: "https://i.pravatar.cc/40?img=2" },
    ],
    priority: "Medium",
    status: "in-progress",
  },
  {
    id: 5,
    name: "Design System",
    date: "23/06/2024 - 24/06/2024",
    assignees: [
      { name: "Jane", src: "https://i.pravatar.cc/40?img=3" },
      { name: "Mark", src: "https://i.pravatar.cc/40?img=4" },
    ],
    priority: "Important",
    status: "in-progress",
  },
  {
    id: 6,
    name: "Medical Appointment",
    date: "16/06/2024 - 18/06/2024",
    assignees: [
      { name: "Tom", src: "https://i.pravatar.cc/40?img=5" },
      { name: "Jerry", src: "https://i.pravatar.cc/40?img=6" },
    ],
    priority: "Urgent",
    status: "to-do",
  },
  {
    id: 7,
    name: "MKV Intranet V2",
    date: "04/06/2024 - 16/06/2024",
    assignees: [
      { name: "Alice", src: "https://i.pravatar.cc/40?img=1" },
      { name: "Bob", src: "https://i.pravatar.cc/40?img=2" },
    ],
    priority: "Medium",
    status: "to-do",
  },
  {
    id: 8,
    name: "Design System",
    date: "23/06/2024 - 24/06/2024",
    assignees: [
      { name: "Jane", src: "https://i.pravatar.cc/40?img=3" },
      { name: "Mark", src: "https://i.pravatar.cc/40?img=4" },
    ],
    priority: "Important",
    status: "to-do",
  },
  {
    id: 9,
    name: "Medical Appointment",
    date: "16/06/2024 - 18/06/2024",
    assignees: [
      { name: "Tom", src: "https://i.pravatar.cc/40?img=5" },
      { name: "Jerry", src: "https://i.pravatar.cc/40?img=6" },
    ],
    priority: "Urgent",
    status: "in-progress",
  },
];

export function useTasks() {
  const [tasks, setTasks] = useState(initialData);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    } else {
      localStorage.setItem("tasks", JSON.stringify(initialData));
    }
  }, []);

  // Sync tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Update task status by id
  const updateStatus = (id: number, newStatus: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return { tasks, setTasks, updateStatus };
}
