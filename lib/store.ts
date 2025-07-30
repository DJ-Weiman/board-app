"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { sampleProject } from "./data";

type ProjectData = typeof sampleProject;

interface StoreState {
  data: ProjectData;
  changeTaskStatus: (taskId: string, newStatus: Status) => void;
  getTasksByStatus: (status: Status) => Task[];
}

export const useProjectStore = create<StoreState>()(
  persist(
    (set, get) => ({
      data: getInitialData(),
      changeTaskStatus: (taskId, newStatus) => {
        set((state) => {
          const task = state.data.tasks.find((t: Task) => t.id === taskId);
          if (task) {
            task.status = newStatus;
          }
          return { data: { ...state.data, tasks: [...state.data.tasks] } };
        });
      },
      getTasksByStatus: (status) => {
        const { data } = get();
        return data.tasks.filter((task) => task.status === status);
      },
    }),
    {
      name: "project-data",
    }
  )
);

function getInitialData(): ProjectData {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("project-data");
    console.log("Stored data:", stored);
    if (stored) {
      try {
        return JSON.parse(stored).state.data;
      } catch {
        return sampleProject;
      }
    }
  }
  return sampleProject;
}

export default useProjectStore;
