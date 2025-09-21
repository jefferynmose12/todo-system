"use client";

import { Box, Grid, Image } from "@chakra-ui/react";
import CardGroup from "./components/cardGroup";
import { useTasks } from "@/hook/useTask";

const CardFormat = () => {
  const { tasks } = useTasks();
  return (
    <Box w="full">
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
        gap={4}
      >
        <CardGroup
          title="To Do"
          icon={<Image src="/images/task.png" alt="task" />}
          total={3}
          data={tasks}
        />
        <CardGroup
          title="In Progress"
          icon={<Image src="/images/progress.png" alt="progress" />}
          total={4}
          data={tasks}
        />
        <CardGroup
          title="Completed"
          icon={<Image src="/images/complete.png" alt="complete" />}
          total={5}
          data={tasks}
        />
      </Grid>
    </Box>
  );
};

export default CardFormat;
