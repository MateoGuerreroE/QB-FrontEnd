export function formatDateString(dateString: string): string {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(
    "en-US",
    options as Intl.DateTimeFormatOptions
  );
}
