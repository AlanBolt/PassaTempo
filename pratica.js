
function carregar(){
var mss =document.querySelector('div#text')
var msg =document.getElementById('msg')
var imag = document.getElementById('imagem')
var date = new Date()
var hora = 10//date.getHours()


msg.innerHTML=` ${hora}Horas`
if(hora >= 0 && hora <12){
  imag.src='../belodia.png';
  

}else if(hora >= 12 && hora < 18){
  imag.src = '../detarde.png';
  
}else{
  imag.src = '../bellaNoite.png';

}



}
var imag = document.getElementById('imagem')

function sair(){

  imag.src='../Frente.png';
}