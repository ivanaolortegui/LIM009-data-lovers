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
      if (sortBy === 'id') {
        order = data.slice().sort((elementA, elementB) => elementA[sortBy].localeCompare(elementB[sortBy]));
      } else {
        order = data.slice().sort((elementA, elementB) => elementA.stats[sortBy] - elementB.stats[sortBy]);
      }
    } else {
      if (sortBy === 'id') {
        order = data.slice().sort((elementA, elementB) => elementB[sortBy].localeCompare(elementA[sortBy]));
      } else {
        order = data.slice().sort((elementA, elementB) => elementB.stats[sortBy] - elementA.stats[sortBy]);
      }
    }
    return order;
  },
  computeStats: (data, tags, feature) => {
    // 1 parameter: data
    // Statistics
    const arrTank = data.filter(value => {
      return value.tags.includes(tags);
    });
    const statsAttackTank = arrTank.map((arr) => arr.info[feature]);
    statsAttackTank.sort((elementA, elementB) => elementA - elementB);
    let sum = 0;
    statsAttackTank.forEach((ele) => {
      sum += ele;
    });
    const arrMeanTank = (sum / statsAttackTank.length).toFixed(2);

    /*  console.log(arrTank);
    const arrEle = [];
    const totalArr = [arrTank, arrMelee, arrAssassin].forEach(ele => ele.map((arr) => arrEle.push(arr.info.attack)));
    console.log(arrEle);
     */
    return arrMeanTank;
  }
};