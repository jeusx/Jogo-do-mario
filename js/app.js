
const marioman = document.querySelector('.marioman');
const pipe = document.querySelector ('.pipe');

const jump = () =>  {

marioman.classList.add ('jump');

setTimeout (()=> {

    marioman.classList.remove('jump');

  } , 500);

}


const loop = setInterval(() => {

const pipePosition = pipe.offsetLeft;
const mariomanPosition = window.getComputedStyle(marioman).bottom.replace('px','' );

console.log (mariomanPosition);


    if (pipePosition <= 100  && pipePosition >0    && mariomanPosition <80) { 

        pipe.style.animation = 'none';

        pipe.style.left = `${pipePosition}px`;

        marioman.style.animation = 'none';

        marioman.style.bottom = `${pipePosition}px`;

        marioman.src = 'assets/game-over.png';
        marioman.style.width = '75px'
        marioman.style.marginLeft = `43px `

        clearInterval(loop)

 }

 

 } , 10);


document.addEventListener('keydown', jump );


