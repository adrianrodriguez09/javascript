let num1, num2, suma, resta;
let resp, menu, preg;

do{
num1=parseInt(prompt("ingrese el numero 1"));
num1=parseInt(prompt("ingrese el numero 2"));

menu="Menu\n\n";
menu+="1. SUMA\n";
menu+="2. RESTA\n";

codigo=parseInt(prompt(menu));

switch(codigo){
 case 1: suma=num1+num2;
document.write (resp="la suma es:"+suma+"<br>");
     break;
case 2: resta=num1+num2;
document.write (resp="la resta es:"+resta+"<br>");
     break;



}










     preg=prompt("desea continuar? ingrese si, o de locontrario este mensaje se ira");

}while(preg=="si")