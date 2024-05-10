export const objectKeySorted = (
  obj: Record<string, any>,
): Record<string, any> => {
  if (!Object.keys(obj)?.length) return obj;

  return Object.keys(obj)
    .sort()
    .reduce(
      (sortedObj, key) => {
        sortedObj[key] = obj[key];
        return sortedObj;
      },
      {} as { [key: string]: any },
    );
};
