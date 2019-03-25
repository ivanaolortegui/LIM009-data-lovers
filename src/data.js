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
  sortData: (data, sortOrder, sortBy) => {
    // 3 parameters: data, sortOrder, sortBy
    // A-Z, Z-A
    let order = [];
    if (sortOrder === '1') {
      if (sortBy === 'name') {
        order = data.sort((a, b) => a.id.localeCompare(b.id));    
      } else {
        order = data.sort((a, b) => a.stats.attackdamage - b.stats.attackdamage);  
      }
    } else {
      if (sortBy === 'name') {
        order = data.sort((a, b) => b.id.localeCompare(a.id));    
      } else {
        order = data.sort((a, b) => b.stats.attackdamage - a.stats.attackdamage);
      }
    }
    return order;
  },
  computeStats: () => {
    // 1 parameter: data
        // Statistics
        const AttackChampsInfo = data.map((data) => {
          return data.info.attack;
      });
      AttackChampsInfo.sort((a, b) => { a - b });
      //const DifficultyChampsInfo = data.map((y) => {
      //    return y.info.difficulty;
      //});
      //DifficultyChampsInfo.sort((a, b) => { a - b });
      const arrMean = AttackChampsInfo / AttackChampsInfo.length
      return arrMean;
  }   
  }
};