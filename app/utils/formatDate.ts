export function formatDateString(dateString: string): string {
  const options = {
    year: "numeric" as any,
    month: "long" as any,
    day: "numeric" as any,
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}
