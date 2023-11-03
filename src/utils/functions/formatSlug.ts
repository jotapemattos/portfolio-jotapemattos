const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/&/g, '-')
    .replace(/[áãâà]/g, 'a')
    .replace(/[éẽêè]/g, 'e')
    .replace(/[[íĩîì]/g, 'i')
    .replace(/[óõôò]/g, 'o')
    .replace(/[úûù]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[^\w\s-]/g, '')
    .toLowerCase();

const formatSlug = (value: string) => {
  if (typeof value === 'string') {
    return format(value);
  }

  return value;
};

export default formatSlug;
