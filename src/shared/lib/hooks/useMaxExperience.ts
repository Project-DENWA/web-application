type Category = {
  exp: string;
};

const useMaxExperience = (categories: Category[]): number => {
  // Helper function to convert exp string to months
  const convertExpToMonths = (exp: string): number => {
    const match = exp.match(/^(\d+)([a-zA-Z]+)$/);
    if (!match) {
      throw new Error(`Invalid experience format: ${exp}`);
    }

    const value = parseInt(match[1], 10);
    const unit = match[2].toLowerCase();

    if (unit === 'y' || unit === 'year' || unit === 'years') {
      return value * 12; // Convert years to months
    } else if (unit === 'm' || unit === 'month' || unit === 'months') {
      return value; // Months
    } else {
      throw new Error(`Invalid experience format: ${exp}`);
    }
  };

  // Convert all experiences to months and find the maximum
  const maxMonths = categories.reduce((max, category) => {
    const months = convertExpToMonths(category.exp);
    return Math.max(max, months);
  }, 0);

  return maxMonths;
};

export default useMaxExperience;
