const body = document.querySelector('body');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2') 
const modalBtn2 = document.querySelector('.modalBtn2');

let modalBtns = document.querySelectorAll('.modalBtn');
let closeModalBtns = document.querySelectorAll('.modalCloseBtn');
let closeModal2Btns = document.querySelectorAll('.modal2CloseBtn');
let headerRight = document.querySelector('.rightBox');
console.log(closeModal2Btns);
modalBtn2.addEventListener('click', showModal2);

function burgerMenu(x) {
  x.classList.toggle("change");
  headerRight.classList.toggle('activeBlock');
}

for(let i=0;i<modalBtns.length;i++){
  modalBtns[i].addEventListener('click', showModal);
}

for(let i=0; i<closeModalBtns.length; i++){
  closeModalBtns[i].addEventListener('click', closeModal);
}

for(let i=0; i<closeModal2Btns.length; i++){
  closeModal2Btns[i].addEventListener('click', closeModal2);
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

function showModal(){
 modal.classList.add('activ');
 body.style.overflow = 'hidden'
}

function showModal2(){
  modal2.classList.add('activ');
  body.style.overflow = 'hidden'
 }

function closeModal(){
  modal.classList.remove('activ');
  body.style.overflow = 'initial';
}

function closeModal2(){
  modal2.classList.remove('activ');
  body.style.overflow = 'initial';
}

window.onclick = function(event){
  if(event.target == modal){
    modal.classList.remove('activ');
    body.style.overflow = 'initial';
  }
}

