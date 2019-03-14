/* Manejo del DOM */
const root = document.getElementById('root');

const valuesOfData = Object.values(LOL.data);
let dataName = '';
valuesOfData.forEach(ele => {
dataName +=ele.id;
const listData =  ` <h2> ${dataName} </h2>
<img src="${ele.img}"/>
`
root.innerHTML = listData;
});
