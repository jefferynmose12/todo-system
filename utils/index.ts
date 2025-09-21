export function getPriorityColor(priority: string): string {
  switch (priority.toLowerCase()) {
    case "urgent":
      return "#FF515D";
    case "important":
      return "#F6BE38";
    case "medium":
      return "#75C5C1";
    case "normal":
      return "#75C5C1";
    default:
      return "#BAC1CC";
  }
}
