function useDaysUntilDate(dateString: string): number {
    const [year, month, day] = dateString.split('-').map(Number);
    const currentDate = new Date();
    const targetDate = new Date(year, month - 1, day);
    const differenceInTime = targetDate.getTime() - currentDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  }
  
  export default useDaysUntilDate;
  