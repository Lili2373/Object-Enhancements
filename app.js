//       Same keys and values
// ES5 Version
function createInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

// ES2015 Version
const createInstructor = (firstName, lastName) => ({ firstName, lastName });


//      Computed Property Names
// ES5 Version
var favoriteNumber = 42;
var instructor = {
    firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!";

// ES2015 Version
const favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
};



//        Object Method
// ES5 Version
var instructor = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi!";
    },
    sayBye: function () {
        return this.firstName + " says bye!";
    }
}

// ES2015 Version
const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}



//         CreateAnimal Function
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    };
}

const d = createAnimal("dog", "bark", "Woooof!");
console.log(d.bark());  // "Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
console.log(s.bleet());  // "BAAAAaaaa"
