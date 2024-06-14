export const useFormatExperience = (months: number): string => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
  
    if (years > 0 && remainingMonths > 0) {
      return `${years} ${pluralize(years, 'год', 'года', 'лет')} и ${remainingMonths} ${pluralize(remainingMonths, 'месяц', 'месяца', 'месяцев')}`;
    } else if (years > 0) {
      return `${years} ${pluralize(years, 'год', 'года', 'лет')}`;
    } else if (remainingMonths > 0) {
      return `${remainingMonths} ${pluralize(remainingMonths, 'месяц', 'месяца', 'месяцев')}`;
    } else {
      return 'Меньше месяца';
    }
  };
  
  const pluralize = (count: number, one: string, two: string, many: string): string => {
    if (count % 10 === 1 && count % 100 !== 11) {
      return one;
    } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
      return two;
    } else {
      return many;
    }
  };
  