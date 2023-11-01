const navBar = document.getElementById('navBar');

function togglebtn(){
  navBar.classList.toggle('hidemenu')
}

/*------Preloader------*/
const loaderPage = document.getElementById('preloader');
window.addEventListener("load", ()=>{
  loaderPage.style.display="none";
})