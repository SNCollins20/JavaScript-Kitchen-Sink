
//Storing my name in a variable.
let myName = "Shashawndra";


//Storing the number of states in a variable.
const USofAmerica = 50;


//Computing 5 plus 4 and storing in a variable.
const addingNumbers = 5 + 4

//Function to alert "hello world!"
function checkAge(name, checkAge) {
    if (age < 21) {
        alert("Sorry" + name + ", you aren't old enough to view this page!");
    }
}

checkAge("Charles", 21);
checkAge("Abby ", 27;
checkAge("James", 18);
checkAge("John", 17);

//Array of favorite veggies.
ley myFavoriteVeg = ["Broccoli", "Jalepenos", "Legumes", "Potatoes"];

for (let i = 0; i < myFavoriteVeg.length; i++) {
    console.log(myFavoriteVeg[i]);
}
//An object with name and breed properties.
let pet = {
    name: "Tink"
    breed: "German Shephard"
};
console.log(pet.name, pet.breed);

//An array of five objects.  Each object has mame and age properties.  Then looping through each one and checking age.
let people = [
    {
        name: "Shashawndra",
    }
];

for let (let i = 0; i < people.length;
i++) {
    checkAge(people[i].name,
        people{ i }.age);
    +)
}

//Function returns the length of any word or string passed in.  Then we find whether the word is even or odd using modulus
// and console.log based on that.
function getLength(word) {
    return word.length;
}