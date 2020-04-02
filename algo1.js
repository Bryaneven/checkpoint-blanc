const userList = [
    { id: 1, name: 'Toto', age: 16 },
    { id: 2, name: 'Tutu', age: 21 },
    { id: 3, name: 'Titi', age: 17 },
    { id: 4, name: 'Tyty', age: 50 },
    { id: 5, name: 'Tata', age: 10 }
]



// Afficher la liste des utilisateurs majeur 

function findMajeur(users) {

    return users.filter(user => user.age >= 18);



}

console.log(findMajeur(userList));
// Afficher un tableau suivant: 
// [
//     { id: 1, name: 'Toto', age: 16 },
//     { id: 3, name: 'Titi', age: 17 },
//     { id: 5, name: 'Tata', age: 10 }
// ]


