/* Manejo del DOM */
const selectTags = document.getElementById('select-tags');
const root = document.getElementById('root');
const radio = document.getElementById('radio');
const botonTop = document.getElementById('backTop');
const btnStats = document.getElementById('stats');

/* data*/
const valuesOfData = Object.values(LOL.data);

const showListOfAllChampions = data => {
  let dataToHtml = [];
  data.forEach((ele, index) => {
    let listData = `
     <div id=${index} class="show">
       <div class="col-xs-4 col-sm-13 col-md-2">
         <h2 class="col-xs-12 col-sm-12 col-md-12"> ${ele.id} </h2>
         <img class="col-xs-12 col-sm-12 col-md-12" id=${index}-${ele.id} src="${ele.splash}" alt="imagen de ${ele.id}"/> 
       </div>
       <div id=${index}-${ele.id} class="hidden">
         <figure class= "col-md-12">
           <img class= "col-xs-8 col-sm-3 col-md-8"src="${ele.splash}"/>
           <figcaption>
             <h3> ${ele.title} </h3>`;
    ele.tags.forEach((tag) => {
      listData += `<img class="icon-img" src="img/${tag}.png">${tag}`;
    });

    listData += `<h3> ${ele.stats.attackdamage}</h3>    
           </figcaption>
         </figure>
       </div>
     </div>`;
    dataToHtml.push(listData);
  });
  root.innerHTML = dataToHtml.join(' ');
};
showListOfAllChampions(valuesOfData);

const pintarTagOpcionsDeSelect = (arrTagsUnicos, elementoSelect) => {
  let opctionToHtml = '<option value = ""> Seleccione su role </option>';
  arrTagsUnicos.forEach(tags => {
    opctionToHtml += `<option value =${tags}> ${tags} </option>`;
  });
  elementoSelect.innerHTML = opctionToHtml;
};

const totalArrayTags = data.getAllChampsTags(valuesOfData);
const uniqueArrayTags = data.getAllUniqueChampsTags(totalArrayTags);

pintarTagOpcionsDeSelect(uniqueArrayTags, selectTags);

selectTags.addEventListener('change', () => {
  const value = data.filterData(valuesOfData, selectTags.value);
  const stats = data.computeStats(value); 
  showListOfAllChampions(value);
});


root.addEventListener('click', (event) => {
  const string = event.target.id; // accede al id de la etiqueta que se hace click
  const index = string.substr(0, string.indexOf('-'));
  event.currentTarget.children[index].lastElementChild.classList.remove('hidden');
  event.currentTarget.children[index].lastElementChild.classList.add('show');
  const RootElements = root.children;
  for (let i = 0; i < RootElements.length; i++) {
    RootElements[i].firstElementChild.classList.remove('show');
    RootElements[i].firstElementChild.classList.add('hidden');
  }
});

radio.addEventListener('click', (event) => {
  const radioValue = event.target.value;
  const radioName = event.target.getAttribute('data-name');
  const resultOrder = data.sortData(valuesOfData, radioValue, radioName);
  showListOfAllChampions(resultOrder);
});
btnStats.addEventListener('click', () => {
  let stats = '';
  stats += data.computeStats(valuesOfData, 'Tank');
  stats += data.computeStats(valuesOfData, 'Melee');
  stats += data.computeStats(valuesOfData, 'Assassin');
  stats += data.computeStats(valuesOfData, 'Fighter');
  stats += data.computeStats(valuesOfData, 'Mage');
  stats += data.computeStats(valuesOfData, 'Marksman');
  stats += data.computeStats(valuesOfData, 'Support');
  console.log(stats);
});
/* back to top*/
botonTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});
window.addEventListener('scroll', () => {

});

/* 
window.onscroll = function() {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    botonTop.style.display = 'block';
  } else {
    botonTop.style.display = 'none';
  }
};
*/
