export function formatDateForUI(date) {
  let formattedDate = 'Invalid Date';
  try {
    date = new Date(date);
    const day = date.getDate().toString().padStart(2, '0'); // Get day and add leading zero if necessary
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month and add leading zero if necessary
    const year = date.getFullYear().toString(); // Get year
    formattedDate = `${day}/${month}/${year}`;
  } catch (error) {
    // console.log(error);
  }
  return formattedDate;
}
