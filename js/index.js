const body = document.querySelector('body');
const modal = document.getElementById('modal');
const video1 = document.getElementById('authorVideo');
// btn
// const modalBtn = document.getElementById('send');
const modalBtn2 = document.getElementById('btnConsultation');
const closeBtn = document.getElementById('closeBtn');
const closeBtn2 = document.getElementById('closeBtn2');
// const playerBtn = document.getElementById('playerBtn');
// tab
const bodyBtn =document.getElementById('bodyBtn');
const mindBtn =document.getElementById('mindBtn');
const soulsBtn =document.getElementById('soulsBtn');
const spiritBtn =document.getElementById('spiritBtn');
// 
closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal);
// playerBtn.addEventListener('click', playPause);

let modalBtns = document.querySelectorAll('.modalBtn');

for(let i=0;i<modalBtns.length;i++){
  modalBtns[i].addEventListener('click', showModal);
}


let tabBtns = document.getElementsByClassName("tabBtn");
let tabcontent = document.getElementsByClassName('tabContent');

for (var i = 0; i < tabBtns.length; i++) {
  tabBtns[i].addEventListener("click",function() {
      for(i=0 ;i<tabcontent.length;i++){
        tabcontent[i].style.display = 'none'
      }

        const tabImg = document.getElementById(this.dataset.id);
        tabImg.style.display = 'block'
    });
}


// function playPause(){
  
//   if (video1.paused){
//     video1.playVideo();
//     playerBtn.classList.add('playerBtnEffect');
//   }  
//   else {
//     video1.stopVideo(); 
//     playerBtn.classList.remove('playerBtnEffect');
//   }
// }


function showModal(){
 modal.classList.add('activ');
 body.style.overflow = 'hidden'
}

function closeModal(){
  modal.classList.remove('activ');
  body.style.overflow = 'initial';
}

window.onclick = function(event){
  if(event.target == modal){
    modal.classList.remove('activ');
    body.style.overflow = 'initial';
  }
}


