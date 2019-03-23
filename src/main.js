/* Manejo del DOM */
const root = document.getElementById('root');
const select = document.getElementById('selectRole');
const radio = document.getElementById('radio');
const botonTop = document.getElementById('backTop');
/* const asc = document.getElementById('r1');
const desc = document.getElementById('r2');
const majorDamage = document.getElementById('r3');
const minorDamage = document.getElementById('r4'); */

/* data*/
const valuesOfData = Object.values(LOL.data);
const dataTemplate = data => {
  let dataToHtml = [];
  data.forEach((ele, index) => {
    const listData = `
      <div id=${index} class="show">
        <div class="col-xs-4 col-sm-13 col-md-2">
          <h2 class="col-xs-12 col-sm-12 col-md-12"> ${ele.id} </h2>
          <img class="col-xs-12 col-sm-12 col-md-12" id=${index}-${ele.id} src="${ele.splash}" alt="imagen de ${ele.id}"/>  
        </div>
        <div id=${index}-${ele.id} class="hidden">
          <figure class= "col-md-12">
            <img class= "col-xs-8 col-sm-3 col-md-8"src="${ele.splash}"/>
            <figcaption>
              <h3> ${ele.title} </h3>
              <img class="icon-img" src="img/asesino-shop.png" <h2> ${ele.tags.join(' ')} </h2>
              <h3> ${ele.stats.attackdamage}</h3>     
            </figcaption>
          </figure>
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

select.addEventListener('change', () => {
  const value = data.filterData(valuesOfData, select.value);
  dataTemplate(value);
});

radio.addEventListener('click', (event) => {
  const radioValue = event.target.value;
  console.log(radioValue);
});

/* back to top*/
botonTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    botonTop.style.display = "block";
  } else {
    botonTop.style.display = "none";
  }
}