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
  sortData: () => {
    // 3 parameters: data, sortBy, sortOrder
    // A-Z, Z-A
  },
    
  computeStats: () => {
    // 1 parameter: data
    // Statistics
  }
};