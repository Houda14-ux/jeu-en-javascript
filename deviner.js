var number=Math.floor(Math.random()*100)
let bouton= document.getElementById ('deviner');
let message= document.getElementById ('msg');
let conteur=0
console.log(number)
bouton.addEventListener('click',function(){
conteur++;
console.log(conteur)
let imput= document.getElementById ('num').value;
if (imput==number && conteur<=2){
    message.innerHTML ='bravo, vous etes génie!Vous l\' avez eu après :'+conteur;
    
}else if (imput<number){
    message.innerHTML ='c\'est plus petit:'+conteur;
}else if (imput>number){
message.innerHTML ='un peu plus grand:'+conteur;
}else if (imput==number && conteur>=3 && conteur<10){
    message.innerHTML ='Félicitation! vous avez gagnè après :'+conteur;
}else if (imput==number && conteur>=10){
    message.innerHTML ='C\'est raté!';}

});


