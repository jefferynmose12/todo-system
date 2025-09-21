"use client";

import { Tabs, Image } from "@chakra-ui/react";
import TabSingle from "./components/tab";
import DataTable from "../dataTable";
import { useMemo, useState } from "react";
import { useTasks } from "@/hook/useTask";

const TableFormat = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { tasks } = useTasks();

  const filteredTasks = useMemo(() => {
    if (activeTab === "all") return tasks;
    if (activeTab === "to do") return tasks.filter((t) => t.status === "to-do");
    if (activeTab === "in progress")
      return tasks.filter((t) => t.status === "in-progress");
    if (activeTab === "completed")
      return tasks.filter((t) => t.status === "completed");
    return tasks;
  }, [tasks, activeTab]);

  return (
    <Tabs.Root
      defaultValue="all"
      variant="plain"
      onValueChange={(e) => setActiveTab(e.value)}
      w="full"
    >
      <Tabs.List w="full" bg="#F7F7F7" rounded="md" p={2}>
        <TabSingle
          value="to do"
          icon={<Image src="/images/task.png" alt="task" />}
          activeIcon={<Image src="/images/active-task.png" alt="task" />}
          active={activeTab === "to do"}
          total={tasks.filter((t) => t.status === "to-do").length}
          badgeColor="#F9F3FF"
          activeColor="#CFB7E8"
        />
        <TabSingle
          value="in progress"
          icon={<Image src="/images/progress.png" alt="progress" />}
          activeIcon={
            <Image src="/images/active-progress.png" alt="progress" />
          }
          active={activeTab === "in progress"}
          total={tasks.filter((t) => t.status === "in-progress").length}
          badgeColor="#FBF4E4"
          activeColor="#F6BE38"
        />

        <TabSingle
          value="completed"
          icon={<Image src="/images/complete.png" alt="complete" />}
          activeIcon={
            <Image src="/images/active-complete.png" alt="complete" />
          }
          active={activeTab === "completed"}
          total={tasks.filter((t) => t.status === "completed").length}
          badgeColor="#E9F5F7"
          activeColor="#75C5C1"
        />
      </Tabs.List>
      <Tabs.Content value="to do">
        <DataTable data={filteredTasks} />
      </Tabs.Content>
      <Tabs.Content value="in progress">
        <DataTable data={filteredTasks} />
      </Tabs.Content>
      <Tabs.Content value="completed">
        <DataTable data={filteredTasks} />
      </Tabs.Content>

      <Tabs.Content value="all">
        <DataTable data={filteredTasks} />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default TableFormat;
