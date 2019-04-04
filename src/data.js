/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
window.data = {
  getAllChampsTags: (dataCampeones) => {
    const arr = [];
    dataCampeones.forEach(tag => tag.tags.map(el => arr.push(el)));
    return arr;
  },
  getAllUniqueChampsTags: (arrTags) => {
    const uniqueTags = [];
    arrTags.forEach((elem) => uniqueTags.indexOf(elem) === -1 ? uniqueTags.push(elem) : uniqueTags);
    return uniqueTags;
  },
  filterData: (data, word) => {
    const roles = data.filter(value => value.tags.includes(word));
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
    const tagsArr = data.filter(value => value.tags.includes(tags));
    const sumTagsElements = tagsArr.map((arr) => arr.info[feature]);
    // sumTagsElements.sort((elementA, elementB) => elementA - elementB); ese era el error codigo muerto 
    let sum = 0;
    sumTagsElements.forEach((ele) => {
      sum += ele;
    });
    const featureTagStats = (sum / sumTagsElements.length).toFixed(2);

    /*  console.log(tagsArr);
    const arrEle = [];
    const totalArr = [tagsArr, arrMelee, arrAssassin].forEach(ele => ele.map((arr) => arrEle.push(arr.info.attack)));
    console.log(arrEle);
     */
    return featureTagStats;
  }
};

