export const truncateText = (text: string, maxLength = 50) => {
  return text.length <= maxLength ? text : text.substring(0, maxLength) + "...";
};
