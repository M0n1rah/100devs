function camelize (str) {
    let noDash = str.split("-");
    let capital = noDash.map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) );
    let camelCase = capital.join("");
    return camelCase;
}

function filterRange (arr, a, b) {
    let filteredItem = arr.filter( item => (a <= item && b >= item) );
    return filteredItem;
}

function filterRangeInPlace (arr, a, b) {
    for (let i =0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 2, 1, -10, 8];

arr.sort( (a, b) => b - a );

function copySorted (arr) {
    return arr.slice().sort();
}

function Calculator () {
    this.Methods = {
        "-": (a, b) => a + b,
        "+": (a, b) => a - b
    };

    this.calculate = function(str) {
        let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map( item => item.name );
alert(names);

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}