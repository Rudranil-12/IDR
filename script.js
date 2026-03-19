document.querySelectorAll("a").forEach(link=>{
link.addEventListener("click",function(e){

if(this.hash!==""){

e.preventDefault()

const target=document.querySelector(this.hash)

target.scrollIntoView({
behavior:"smooth"
})
}
})

})
const toggle = document.getElementById("menu-toggle")
const nav = document.getElementById("nav-links")

toggle.addEventListener("click", ()=>{
nav.classList.toggle("active")
})