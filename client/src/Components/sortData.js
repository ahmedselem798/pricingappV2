
export const sortData = (data, sortOrder) => {
    const { column, direction } = sortOrder;
  
    const compareFunction = (a, b) => {
      const valueA = a[column].toLowerCase();
      const valueB = b[column].toLowerCase();
  
      if (valueA < valueB) {
        return direction === "asc" ? -1 : 1;
      } else if (valueA > valueB) {
        return direction === "asc" ? 1 : -1;
      } else {
        // If values are equal, consider additional sorting criteria
        if (column === "countryName") {
          // Sort by provider alphabetically
          const providerComparison = a.provider.toLowerCase().localeCompare(b.provider.toLowerCase());
          if (providerComparison !== 0) {
            return direction === "asc" ? providerComparison : -providerComparison;
          }
  
          // If providers are also equal, sort by IMSI numbers
          return direction === "asc" ? a.imsi - b.imsi : b.imsi - a.imsi;
        } else {
          // If sorting criteria is not countryName, use default sorting
          return direction === "asc" ? a[column] - b[column] : b[column] - a[column];
        }
      }
    };
  
    return [...data].sort(compareFunction);
  };
  