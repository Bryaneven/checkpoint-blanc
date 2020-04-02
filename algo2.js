const numberList = [20,30,1,4,9,20]

function sortarray (numbersArray){
     return numbersArray.sort(function(a, b) {
        return a - b;
      })
}



// Ecrire une fonction prend en entrée un tableau de nombre (numberList) et qui retourne le tableau triée

// tu devra pouvoir appeler ta fonction comme il suit: console.log(leNomDeTaFonction(numberList))
 console.log(sortarray(numberList));
 