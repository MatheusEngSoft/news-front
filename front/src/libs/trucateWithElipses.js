export function truncateWithEllipses(text, max) {
  return text.length > max ? text.substr(0, max - 1) + '…' : text;
}
