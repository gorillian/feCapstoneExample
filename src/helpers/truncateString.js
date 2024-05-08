export function truncateString(str) {
  const cutOff = str.slice(0, 100);
  return `${cutOff}...`;
}
