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

