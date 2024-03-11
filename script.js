const myProducts = ['Camasa', 'Pantaloni', 'Manusi'];

console.log(`myProducts: `, myProducts);                           //afiseaza elementele
console.log(`First item in myProducts is:  ${myProducts[0]}`);     // afiseaza elementul de pe pozitia 0
console.log(`Length of myProducts array is ${myProducts.length}.`); // afiseaza lungimea sirului (cate elemente are)

//  adaugare de elemente

const newItem = 'Pantofi';
myProducts.push(newItem);                                // folosim metoda push pentru a adauga un element nou in aceeasi lista
console.log(`myProducts after Push: `, myProducts);   

myProducts.push(25);
console.log(`myProducts after Push: `, myProducts);      // putem adauga si un altfel de data in cadrul array -ului (ex: numar) 

// modificarea  unui  element     

myProducts[0] = 'Tricou';       //(pe index 0 sa fie un element nou: Tricou)
console.log(`myProducts after changing first item: `, myProducts);

//stergerea unui element

myProducts.pop();        // stergerea ultimului element din lista
console.log(`myProducts after pop: `, myProducts);

//adaugarea elementelor la inceputul listei

myProducts.unshift('Camasa');
console.log(`myProducts after unshift: `, myProducts);

// stergerea unui element de la inceputul listei

myProducts.shift();
console.log(`myProducts after shift: `, myProducts);

//  indexOf- gasirea indexului unui element din array

const indexOfPantaloni = myProducts.indexOf('Pantaloni');
console.log(`Elementul Pantaloni se afla in lista la indexul: ${indexOfPantaloni}`);

// subset al unui array
const subsetOfMyProducts = myProducts.slice(1,3);
console.log(`Subset from 1 to 3 is `, subsetOfMyProducts);

//myProducts.splice(2,1);         // varianta asta afiseaza lista fara elementul sters
//console.log('After splice(2, 1): ', myProducts);

myProducts.splice(2,1, 'Camasa');  // varianta asta scoate elementul de pe indexul 2 si il inlocuieste cu Camasa
console.log('After splice(2, 1, "Camasa"): ', myProducts);

// concatenare array -uri

const concatenatedArrays = myProducts.concat(subsetOfMyProducts);
console.log('after concat(subsetOfMyProducts): ', concatenatedArrays);