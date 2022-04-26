export function formatNumber(value: string): string {
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function parseFormatNumber(value: string): string {
  value += '';
  return value.replace(/\s?|(,*)/g, '');
}
