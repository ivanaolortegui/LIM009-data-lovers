/* Manejo del DOM */
const root = document.getElementById('root');
const valuesOfData = Object.values(LOL.data);
const dataTemplate = data => {
  let dataToHtml = '';
  data.forEach(ele => {
    const listData = `
      <h2> ${ele.id} </h2>
      <img id="img-campions" src="${ele.img}"/>
      <h2> ${ele.tags.join(' ')} </h2>
      `
    dataToHtml += listData;
  });
  root.innerHTML = dataToHtml;
};
dataTemplate(valuesOfData);

