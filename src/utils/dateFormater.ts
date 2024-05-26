export const dateFormater = (values: string) => {
  const date = new Date(values);
  // Extract the year, month, and day
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  // Format the date as "YYYY-MM-DD"
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
