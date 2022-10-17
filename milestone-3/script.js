// creo l'array
const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
];
// dichiaro gli elementi da stampare , assegnando nessun valore
let imagesTag ='';
let thumbTag ='';
//dichiaro i contenitori

const slider = document.querySelector('.slider');
const thumbnail = document.querySelector('.thumbnail');

// ciclo l'arrey e creo le stringhe da inserire all'iterno di .slider e .thumbnail

for (let i = 0 ; i < images.length ; i++){
  imagesTag += `
     <img class="item-slider" src="./img/${images[i]}" alt="${images[i]}">
  `;
  thumbTag += `
  <img class="item-thumb" src="./img/${images[i]}" alt="${images[i]}">
`;

}

// Stampo gli elementi all'interno dell'html dinamicamente
slider.innerHTML += imagesTag;
thumbnail.innerHTML += thumbTag;


//Creo 2 class-list per le immagini

const itemSlider = document.getElementsByClassName('item-slider');

const itemThumb = document.getElementsByClassName('item-thumb');

// aggiungo di default a indice 0 della class-list la classe active per visualizzare il primo elemento della lista 
itemSlider[0].classList.add('active');
itemThumb[0].classList.add('active');

//Creo un counter esterno = 0

counter = 0;

// dichiaro i bottoni 

const up = document.querySelector('.up');
const down = document.querySelector('.down');

down.addEventListener('click', function() {
  if(counter === images.length -1 ){
    itemSlider[counter].classList.remove('active');
    itemThumb[counter].classList.remove('active');
    counter = 0;
    itemSlider[counter].classList.add('active');
    itemThumb[counter].classList.add('active');
  }else{
    itemSlider[counter].classList.remove('active');
    itemThumb[counter].classList.remove('active');
    counter = counter + 1;
    itemSlider[counter].classList.add('active');
    itemThumb[counter].classList.add('active');
    console.log(counter);
  }

 
})

console.log(counter);

up.addEventListener('click', function() {
  if(counter === 0 ){
    itemSlider[counter].classList.remove('active');
    itemThumb[counter].classList.remove('active');
    counter = images.length - 1;
    itemSlider[counter].classList.add('active');
    itemThumb[counter].classList.add('active');
  }else{
    itemSlider[counter].classList.remove('active');
    itemThumb[counter].classList.remove('active');
    counter = counter - 1;
    itemSlider[counter].classList.add('active');
    itemThumb[counter].classList.add('active');
    console.log(counter);
  }

})
 





