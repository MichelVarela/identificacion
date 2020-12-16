/* Ejercicio IDENTIFICACION
Crear una función que reciba dos parámetros: 'user' y 'password'. Usando SWITCH
mostrar en consola los siguientes mensajes, según corresponda:
1.- "Bienvenido a nuestro sitio!", (si el usuario es "admin" y la contraseña es 1234)
2.- Contraseña incorrecta
3.- Usuario incorrecto
4.- Usuario y Contraseña incorrectos
5.- Debe ingresar los datos requeridos */

function identificacion(user,password){
    
    
    switch(true){ //declaramos true como booleano para analizar en cada caso
        case user === undefined || password === undefined: // si el termino no esta definido ( no escribimos ningun parametro u omitimos alguno de los dos) igualamos a la palabra reservada undefined
            console.log('Debe ingresar los datos requeridos');
            break;
        case user === 'admin' && password === 1234: // mediante el operador && evaluamos ambos casos en la codicion
            console.log('Bienvenido a nuestro sitio!');
            break;
        case user === 'admin' && password !== 1234:
            console.log('Contraseña incorrecta');
            break;
        case user !== 'admin' && password === 1234:
            console.log('Usuario incorrecto');
            break;
        case user !== 'admin' && password !== 1234:
            console.log('Usuario y contraseña incorrectos');
            break;
        default:
            console.log('error');
            break;
    }
}


console.log(identificacion());


function identificacion(user,password){
    
    
    switch(true){ //declaramos true como booleano para analizar en cada caso
    
        case user === 'admin' && password === 1234: // mediante el operador && evaluamos ambos casos en la codicion
            console.log('Bienvenido a nuestro sitio!');
            break;
        case user === 'admin' && password !== 1234:
            console.log('Contraseña incorrecta');
            break;
        case user !== 'admin' && password === 1234:
            console.log('Usuario incorrecto');
            break;
        case user === null || password == null: // si los terminos son nulos nos devuelve el siguiente console.log
            console.log('Debe ingresar los datos requeridos');
            break;
        default:
            console.log('Usuario y contraseña incorrectos');
            break;
    }
}


identificacion(); // no es necesario declarar console.log al llamar a una funcion


