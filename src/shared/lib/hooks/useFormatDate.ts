function formatDate(createdAt: string): { date: string; time: string } {
    const dateObj = new Date(Number(createdAt));
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear().toString();
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    const seconds = dateObj.getSeconds().toString().padStart(2, '0');
    
    const formattedDate = `${day}.${month}.${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    
    return { date: formattedDate, time: formattedTime };
  }
  
  function useFormatCreatedAt(createdAt: string): { date: string; time: string } {
    return formatDate(createdAt);
  }
  
  export default useFormatCreatedAt;
  