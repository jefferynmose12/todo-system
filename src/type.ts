export type Item = {
  id: number;
  name: string;
  date: string;
  assignees: { name: string; src: string }[];
  priority: string;
  status: string;
};
