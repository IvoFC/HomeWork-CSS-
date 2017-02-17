/**
 * Created by ivo on 15.02.17.
 */

function Person(name, age, isMale) {
    this.name = name;
    this.age = age;
    this.isMale = isMale;
}

Person.prototype.showPersonInfo = function () {
    for (var item in this) {
        if (this.hasOwnProperty(item)) {
            console.log(item + ": " + this[item]);
        }
    }
    console.log();
};

function Student(name, age, isMale, score) {
    Person.call(this, name, age, isMale);
    this.score = score;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.showStudentInfo = function () {
    this.showPersonInfo();
};

function Employee(name, age, isMale, daySalary) {
    Person.call(this, name, age, isMale);
    this.daySalary = daySalary;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.calculateOvertime = function (hours) {
    var workingHours = 8;
    var overtimeBonus = 1.5;
    var hourSalary = (this.daySalary / workingHours) * overtimeBonus;

    if (this.age > 18 && hours > 0) {
        return hourSalary * hours;

    } else {
        return 0;
    }
};

Employee.prototype.showEmployeeInfo = function () {
    this.showPersonInfo();
};

var ivan = new Person('Ivan', 24, "male");
var drago = new Employee("Drago", 23, 'male', 50);
var pencho = new Student("Pencho", 23, 'male', 253);
var gosho = new Person('Gosho', 24, 'male');
var dimitur = new Employee("Mitko", 17, 'male', 50);
var pentkan = new Student("Penko", 23, 'male', 253);

// pencho.showStudentInfo();
// ivan.showPersonInfo();
// drago.showEmployeeInfo();

var arr = new Array(10);

function addPerson(arr, person) {
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] == undefined) {
            arr[index] = person;
            break;
        }
    }
}

addPerson(arr, ivan);
addPerson(arr, drago);
addPerson(arr, pencho);
addPerson(arr, pentkan);
addPerson(arr, gosho);
addPerson(arr, dimitur);

for (var index = 0; index < arr.length; index++) {
    if (arr[index] instanceof Student) {
        arr[index].showStudentInfo();

    } else if (arr[index] instanceof Employee) {
        arr[index].showEmployeeInfo();
        console.log("Overtime bonus: " + arr[index].calculateOvertime(2))
    }
}

