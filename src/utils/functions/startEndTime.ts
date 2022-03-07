export function startEndTime() {
  const start = new Date().setHours(0, 0, 0, 0);
  const end = new Date().setHours(0, 0, 0, 0) + 86400000;

  return { start, end };
}
