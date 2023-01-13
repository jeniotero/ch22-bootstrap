/*
    Preguntar(prompt) el número de mes, del 1 al 12.
    de acuerdo al mes indica desplegar en consola
    la estación del año:
    mes 12, 1, 2 = Invierno;
    mes 3, 4, 5 = Primavera;
    mes 6, 7, 8 = Verano;
    mes 9, 10, 11 = Otoño;

    Usar swi1tch.
*/
let mes = prompt('¿cual mes quieres saber la estacion')

console.log(mes)+(mesletra);


switch (mes + mesletra) {
    case '12':
     mesletra = ('Diciembre');
        console.log('Invierno')+ (mesletra);
        break;
    case '1':
        mesletra = ('Enero');
        console.log('Invierno');
        break;
    case '2':
        mesletra = ('Febrero');
        console.log('Invierno');
        break;
        
    
    case '3':
        mesletra = ('Marzo');
        console.log('Primavera');
        break;
        
    case '4':
        mesletra = ('Abril');
        console.log('Primavera');
        break;
        

        case '5':
            mesletra = ('Mayo');
            console.log('Primavera');
            break;
        
        

    case '6':
        mesletra = ('Junio');
        console.log('Verano');
break;
    case '7':
        mesletra = ('Julio');
        console.log('Verano');
break;
    case '8' :
        mesletra = ('Agosto');
        console.log('Verano');
break;

case '9':
    mesletra = ('Septiembre');
        console.log('Otoño');
break;
case '10':
    mesletra = ('Noviembre');
    console.log('Otoño');
break;
case '11':
    mesletra = ('Diciembre');
    console.log('Otoño');
break;
    default: 
    console.log('Ni idea');
    
}

//---------Refactorizando
function factorial( number ){
    if( number < 1) 
        return 1;
    return number * factorial( number - 1 )
}
console.log("Factorial 5 = " + factorial(5) ); //120
