export function formatCreatedAt(date: Date): string {
  const formatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);

  return `Added ${formatted}`;
}
