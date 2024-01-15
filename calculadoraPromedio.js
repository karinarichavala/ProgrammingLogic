
let nombreEstudiante = prompt("Ingrese su nombre");
let nota1 = -1;
let nota2 = -1;
let nota3 = -1;

while(nota1<0 || nota1>10) {

nota1=+prompt("Ingrese la primera nota");
}

while(nota2<0 || nota2>10) {

    nota2=+prompt("Ingrese la segunda nota");
}

while(nota3<0 || nota3>10) {

    nota3=+prompt("Ingrese la tercera nota");
}

let promedio = (nota1+nota2+nota3)/3;
promedio = promedio.toFixed(2);


if(promedio>=7) {

    alert(nombreEstudiante + " ¡felicidades! Has aprobado con un promedio de: " + promedio);
} else {

    alert(nombreEstudiante + " gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es: " + promedio);
}

