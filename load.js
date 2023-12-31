const btn=document.querySelector("#menu-button");
const rootElement =document.documentElement

btn.addEventListener("click",()=>{
    rootElement.toggleAttribute('inner')


})