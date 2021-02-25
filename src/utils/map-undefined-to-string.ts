export const mapUndefinedToString = (
  text: string | number | undefined
): string => {
  return typeof text === "string" ? text : "";
};
