/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
window.data = {
  // pushando a cada elemento (tags) del array que es valor de la propiedad tags del array de la data
  getAllChampsTags: (dataCampions) => {
    const arr = [];
    dataCampions.forEach(tag => tag.tags.forEach(el => arr.push(el)));
    return arr;
  },
  // funcion refactorizada usando condicionales ternarios 
  getAllUniqueChampsTags: (arrTags) => {
    // aqui filtro los tags que no se entran aun en el array, comprando y buscandolo con un indexOf y que me lo retorne si no lo encuentra 
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
    // primero filtro todos los tags; y luego mapeo e ingreso al objeto info y obtengo a su valor que puede ser attack o dificulty
    const tagsArr = data.filter(value => value.tags.includes(tags));
    const sumTagsElements = tagsArr.map((arr) => arr.info[feature]);
    // sumTagsElements.sort((elementA, elementB) => elementA - elementB); ese era el error codigo muerto 
    let accumulator = 0;
    sumTagsElements.forEach((ele) => {
      accumulator += ele;
    });
    const featureTagStats = (accumulator / sumTagsElements.length).toFixed(2);
    return featureTagStats;
  }
};


