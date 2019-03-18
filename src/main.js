/* Manejo del DOM */
const root = document.getElementById('root');

/* data*/
const valuesOfData = Object.values(LOL.data);

const dataTemplate = data => {
  let dataToHtml = [];
  data.forEach((ele, index) => {
    const listData = `
     <div id=${index} class="show">
      <div>
        <h2> ${ele.id} </h2>
        <img id=${index}-${ele.id} src="${ele.img}"/>
        
      </div>
      <div id=${index}-${ele.id} class="hidden">
         <img src="${ele.splash}"/>
         <h3 > ${ele.title} </h3>
         <h2> ${ele.tags.join(' ')} </h2>
         <h3> ${ele.stats.attackdamage}</h3>
      </div>
      </div>`;
    dataToHtml.push(listData);
  });
  root.innerHTML = dataToHtml.join(' ');
};
dataTemplate(valuesOfData);

root.addEventListener('click', (event) => {
  const string = event.target.id; // accede al id de la etiqueta que se hace click
  const index = string.substr(0, string.indexOf('-'));
  event.currentTarget.children[index].lastElementChild.setAttribute('class', 'show');
  const RootElements = root.children;
  for (let i = 0; i < RootElements.length; i++) {
    RootElements[i].firstElementChild.setAttribute('class', 'hidden');
  }
});

