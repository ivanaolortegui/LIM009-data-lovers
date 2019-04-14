/* eslint-disable no-console */
/* Manejo del DOM */
const selectTags = document.getElementById('select-tags');
const root = document.getElementById('root');
const btnRadios = document.getElementById('btn-radios');
const radio = document.getElementById('radio');
const botonTop = document.getElementById('back-top');
const btnStats = document.getElementById('stats');
const btnChampions = document.getElementById('btn-champions');
const computeStatsPage = document.getElementById('compute-stats-page');
const championsPage = document.getElementById('champions-page');
const statsChampions = document.getElementById('stas-champions');

const getFetchJSON = (url) => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const JSON = Object.values(data.data);
      JSONData(JSON);
    })
    .catch(error => {
      return error;
    });
};
getFetchJSON('http://raw.githubusercontent.com/ivanaolortegui/LIM009-data-lovers/master/src/data/lol/lol.json');

/* data*/
// const valuesOfData = Object.values(LOL.data);

const JSONData = (valuesOfData) => {
  const showListOfAllChampions = data => {
    let dataToHtml = [];
    data.forEach((ele, index) => {
      let listData = `
     <div id=${index} class="show">
       <div class="col-xs-4 col-sm-4 col-md-2">
         <h2 class="col-xs-12 col-sm-12 col-md-12"> ${ele.name} </h2>
         <img class="col-xs-12 col-sm-12 col-md-12" id=${index}-${ele.name} src="${ele.splash}" alt="imagen de ${ele.id}"/> 
       </div>
       <div id=${index}-${ele.id} class="hidden col-md-12">
         <figure>
           <img class= "col-xs-8 col-sm-8 col-md-8"src="${ele.splash}"/>
           <figcaption>
             <h3> ${ele.title} </h3>`;
      ele.tags.forEach((tag) => {
        listData += `<img class="icon-img" src="img/${tag}.png">${tag}`;
      });

      listData += `<h3> ${ele.stats.attackdamage}</h3>    
           </figcaption>
         </figure>
         <button id="to-back" class="btn-to-back">Regresar</button>
       </div>
     </div>`;
      dataToHtml.push(listData);
    });
    root.innerHTML = dataToHtml.join(' ');
  };
  showListOfAllChampions(valuesOfData);

  // Pintando dinamicamente los roles unicos de los campeones en los selects

  const showTagsInSelectOptions = (arrTagsUnique, elementSelect) => {
    let opctionToHtml = '<option value = ""> SELECT A ROLE </option>';
    arrTagsUnique.forEach(tags => {
      opctionToHtml += `<option value =${tags}> ${tags} </option>`;
    });
    elementSelect.innerHTML = opctionToHtml;
  };
  // constantes donde almaceno toda la cantidad de roles
  const totalArrayTags = data.getAllChampsTags(valuesOfData);
  // constantes donde filtro solo los roles unicos.
  const uniqueArrayTags = data.getAllUniqueChampsTags(totalArrayTags);

  // le paso los parametros a la funcion de pintar las opciones con value de roles
  showTagsInSelectOptions(uniqueArrayTags, selectTags);

  // Evento del select para filtar segun el rol
  selectTags.addEventListener('change', () => {
    const value = data.filterData(valuesOfData, selectTags.value);
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
    const btnToBack = event.currentTarget.children[index].lastElementChild.lastElementChild;
    btnToBack.addEventListener('click', () => {
      root.children[index].lastElementChild.classList.remove('show');
      root.children[index].lastElementChild.classList.add('hidden');
      for (let i = 0; i < RootElements.length; i++) {
        RootElements[i].firstElementChild.classList.remove('hidden');
        RootElements[i].firstElementChild.classList.add('show');
      }
    });
  });

  btnRadios.addEventListener('click', () => {
    radio.classList.remove('hidden');
    radio.classList.add('flex');
  });
  radio.addEventListener('click', (event) => {
    const radioValue = event.target.value;
    const radioName = event.target.getAttribute('data-name');
    const resultOrder = data.sortData(valuesOfData, radioValue, radioName);
    showListOfAllChampions(resultOrder);
  });
  btnStats.addEventListener('click', () => {
    let statsResult = '';
    uniqueArrayTags.forEach(ele => {
      statsResult += ` <h2 class="container">Promedio de ataque de ${ele}: ${data.computeStats(valuesOfData, ele, 'attack')} de ataque. </h2>
    <h2 class="container"> Promedio de dificultad de ${ele}: ${data.computeStats(valuesOfData, ele, 'difficulty')} de dificultad. </h2>`;
    });
    championsPage.classList.remove('show');
    championsPage.classList.add('hidden');
    computeStatsPage.classList.add('show');
    statsChampions.innerHTML = statsResult;

    /* // Grafico de google charts 
    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      let dataArray = [['Rol', 'dificultad', 'ataque']];
      uniqueArrayTags.forEach((tags) => {
        let dificultad = parseFloat(window.data.computeStats(valuesOfData, tags, 'difficulty'));
        let ataque = parseFloat(window.data.computeStats(valuesOfData, tags, 'attack'));
        let x = [tags, dificultad, ataque];
        dataArray.push(x);
      });
    
      let data = google.visualization.arrayToDataTable(dataArray);

      uniqueArrayTags.forEach((tags) => {
        let dificultad = parseFloat(window.data.computeStats(valuesOfData, tags, 'difficulty'));
        let ataque = parseFloat(window.data.computeStats(valuesOfData, tags, 'attack'));
        let x = [tags, dificultad, ataque];
        data.addRow(x);
      });
      const options = {
        chart: {
          title: 'Promedio de Roles',
          subtitle: 'Dificultad y Ataque',
        }
      };

      const chart = new google.charts.Bar(document.getElementById('columnchart_material'));
      chart.draw(data, google.charts.Bar.convertOptions(options));
    } */
  });
  btnChampions.addEventListener('click', () => {
    computeStatsPage.classList.remove('show');
    computeStatsPage.classList.add('hidden');
    championsPage.classList.remove('hidden');
    championsPage.classList.add('show');
  });
  /* back to top*/
  botonTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });
  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      botonTop.classList.remove('hidden');
      botonTop.classList.add('show');
    } else {
      botonTop.classList.remove('show');
      botonTop.classList.add('hidden');
    }
  });
};

