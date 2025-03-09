interface student {
    name: string;
    age: number;
}

let firstStudent: student = {
    name: "Rahaf",
    age: 20
}

if (firstStudent.age > 18) {

    
console.log("Adult")
}
else {
    console.log("Minor")
}



//////////////////////////////////

interface Teacher {
    name: string;
    subjects: string[];
}

const teacher: Teacher = {
    name: "Ammar",
    subjects: ["Math", "Science", "History"]
};

console.log(`Subjects taught by ${teacher.name}:`);
teacher.subjects.forEach(subject => {
    console.log(subject);
});

////////////////////////////////////////

interface Product {
    name: string;
    price: number;
    quantity: number;
}

const products: Product[] = [
    { name: "qataif", price: 2, quantity: 10 },
    { name: "tamor", price: 3, quantity: 3 },
    { name: "mirinda", price: 4, quantity: 7 },
    { name: "pepsi", price: 5, quantity: 4 }
];

products.forEach(product => {
    if (product.quantity > 5) {
        product.price *= 0.85; // Reduce price by 15%
    }
});

console.log("Updated Products:");
console.log(products);



//////////////////////////




interface Products {
    name: any,
    Description: any,
    price: any,
    quantity: any
}

function store() {
    var Pname = (document.getElementById('name') as HTMLInputElement)?.value;
    var Pdescription = (document.getElementById("description") as HTMLInputElement)?.value;
    var Pprice = (document.getElementById("price") as HTMLInputElement)?.value;
    var Pquantity = (document.getElementById("quantity") as HTMLInputElement)?.value;

    localStorage.setItem("Pname", Pname);
    localStorage.setItem("Pdescription", Pdescription);
    localStorage.setItem("Pprice", Pprice);
    localStorage.setItem("Pquantity", Pquantity);

    store1();
}


function store1() {


    var productList = document.getElementById("productList");
    if (productList) {
        productList.innerHTML += `${localStorage.getItem("Pname")}
    ${localStorage.getItem("Pdescription")}
    ${localStorage.getItem("Pprice")}
    ${localStorage.getItem("Pquantity")}`
    }
}
