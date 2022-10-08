// Busqueda binaria

function busquedaBinaria (vector, l, r, x){
    if( l > r )return -1;
    
    const m = Math.floor((l + r) / 2);
    
    if(vector[m] == x) return m;
    
    if(vector[m] < x){
        return busquedaBinaria(vector, m + 1, r, x);
    } else {
        return busquedaBinaria(vector, l, m - 1, x);
    }
    }
    
    const vector = [2, 3, 4, 5, 6, 7, 8, 9];

    //Ordenar array

    let numeros = [1, 5, 3, 2, 5, 6];

function ordenarNumeros(numeros){
    for (let i = 0; i < numeros.length - 1; i++){

        for (let j = 0; j < numeros.length - i - 1; j++) {
            if (numeros[j] > numeros[j + 1]){
                [numeros[j],  numeros[j + 1]] = [numeros[j + 1], numeros[j]];
            }
    }
}

return numeros;

}  
 
console.log(ordenarNumeros(numeros));

// Ejercicio clase

