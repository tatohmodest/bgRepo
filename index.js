const menu = document.getElementById('menu')
const close = document.getElementById('close')
const nav = document.getElementById('nav')

menu.addEventListener('click',()=>{
   nav.classList.add('active')
   
  
})
close.addEventListener('click',()=>{
   nav.classList.remove('active')
})