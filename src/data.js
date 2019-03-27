/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
window.data = {
  getAllChampsTags: (dataCampeones) => {
    const arr = [];
    dataCampeones.forEach((ele) => {
      arr.push(...ele.tags);
    });
    return arr;
  },
  getAllUniqueChampsTags: (arrTags) => {
    const uniqueTags = [];
    for (let i = 0; i < arrTags.length; i++) {
      if (uniqueTags.indexOf(arrTags[i]) === -1) {
        uniqueTags.push(arrTags[i]);
      }
    }
    return uniqueTags;
  },
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
  computeStats: (data) => {
    // 1 parameter: data
    // Statistics
    const attackChampsInfo = data.map((arr) => {
      return arr.info.attack;
    });
    attackChampsInfo;
    attackChampsInfo.sort((a, b) => a - b);
    let sum = 0;
    attackChampsInfo.forEach((ele) => {
      sum += ele;
    });
    const arrMean = (sum / attackChampsInfo.length).toFixed(2); // promedio de attaque
    const difficultyChampsInfo = data.map((arr) => {
      return arr.info.difficulty;
    });
    difficultyChampsInfo.sort((a, b) => a - b);
    let sumDifficulty = 0;
    difficultyChampsInfo.forEach((ele) => {
      sumDifficulty += ele;
    });
    const meanDifficulty = (sumDifficulty / difficultyChampsInfo.length).toFixed(2); // promedio de dificultad
    return `promedio de attack: ${arrMean} 
    promedio de dificulty:${meanDifficulty}`;
  }
};