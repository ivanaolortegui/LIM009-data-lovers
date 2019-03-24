/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
window.data = {
  filterData: (data, word) => {
    const roles = data.filter(value => {
      return value.tags.includes(word);
    });
    return roles;
  },
  sortData: (data, sortOrder) => {
    // 3 parameters: data, sortBy, sortOrder
    // A-Z, Z-A
    const OrderNames = data.sort((a, b) => {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
      if (a > b) {
        return 1 * sortOrder;
      } else if (a < b) {
        return -1 * sortOrder;
      }
    });
    return OrderNames;
  },
    
  computeStats: () => {
    // 1 parameter: data
    // Statistics
  }
};