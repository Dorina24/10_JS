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

//OBIECTE __________________________________________________
let person = {
    name: "John",
    surname: "Doe",
    age: 32,
    address: {
        street: "Cetatii",
        number: 21,
        appartment: "b1",
        block: "7b",
        zipCode: "100203",
        city: "Cluj-Napoca",
        country: "Cluj",
        country: "Romania"
    },
};
console.log("person: ", person);
console.log (`nume persoana: ${person.name}`);
console.log (`cos postal ${person.address.zipCode}`);
console.log(person.appartment);    //returneaza undefined pt ca nu am selectat si obiectul adress; trebuie: person.address.appartment

//brackets notation
console.log(`person surname: ${person["surname"]}`);   // alt mod prin care putem accesa obiectul SURNAME

//modificare valori in obict
person.name = "Ion";
console.log(`Name is:`, person.name);

//comparare obiecte

const obj1 = {a:10, b:true};
const obj2 = {a:10, b:true};
console.log(obj1 === obj2);     // returneaza FALS pentru ca se considera ca au locuri diferite in memorie

const obj3=obj1;   // trebuie sa cream o a treia variabila de tip const salvam adresa catre obj1
console.log(obj1 === obj3); // cand comparam obj1 cu adresa lui va returna ADEVARAT


//comparare dupa proprietati
const areEqual = obj1.a === obj2.a && obj2.b === obj3.b;
console.log(`areEqual:`, areEqual);


