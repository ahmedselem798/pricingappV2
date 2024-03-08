// export const sortData = (data, sortOrder) => {
//     const { column, direction } = sortOrder;
  
//     const compareFunction = (a, b) => {
//       const valueA = a[column].toLowerCase();
//       const valueB = b[column].toLowerCase(); 
  
//       if (column === "countryName") {
//         // Sort by countryName alphabetically
//         const countryComparison = valueA.localeCompare(valueB);
//         if (countryComparison !== 0) {
//           return direction === "asc" ? countryComparison : -countryComparison;
//         }
//       }
  
//       // If country names are equal or sorting by a different column, proceed to the next criteria
//       // Sort by provider alphabetically
//       const providerComparison = a.provider.toLowerCase().localeCompare(b.provider.toLowerCase());
//       if (providerComparison !== 0) {
//         return direction === "asc" ? providerComparison : -providerComparison;
//       }
  
//       // If providers are also equal, sort by IMSI numbers
//       return direction === "asc" ? a.imsi - b.imsi : b.imsi - a.imsi;
//     };
  
//     return [...data].sort(compareFunction);
//   };
  
export const sortData = (data, sortOrder) => {
  const { column, direction } = sortOrder;

  const compareFunction = (a, b) => {
    const valueA = a[column].toLowerCase();
    const valueB = b[column].toLowerCase();

    if (column === "countryName") {
      // Sort by countryName alphabetically
      const countryComparison = valueA.localeCompare(valueB);
      if (countryComparison !== 0) {
        return direction === "asc" ? countryComparison : -countryComparison;
      }
    }

    // If country names are equal or sorting by a different column, proceed to the next criteria
    // Sort by provider alphabetically
    const providerComparison = a.provider.toLowerCase().localeCompare(b.provider.toLowerCase());
    if (providerComparison !== 0) {
      return direction === "asc" ? providerComparison : -providerComparison;
    }

    // If providers are also equal, sort by IMSI numbers
    const imsiComparison = a.imsi - b.imsi;
    if (imsiComparison !== 0) {
      return direction === "asc" ? imsiComparison : -imsiComparison;
    }

    // If IMSI numbers are also equal, sort by the cost of each country
    const costComparison = a.dataCostPerMB - b.dataCostPerMB;
    return direction === "asc" ? costComparison : -costComparison;
  };

  return [...data].sort(compareFunction);
};

