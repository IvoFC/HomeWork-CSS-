/**
 * Created by ivo on 12.02.17.
 */
/*
 Създайте конструктор Student, създаващ студенти.
 Нека да приема следните данни:
 name – име на студента
 subject - специалност
 grade – успех
 yearInCollege – курс
 age – години на студента
 hasDegree – дали е завършил или не
 money – пари от стипендии.
 Нека да се дефинират следните методи:
 -метод upYear(), който увеличава годината в колежа с единица, ако
 студента не е завършил, а в противен случай извежда подходящо
 съобщение. Ако след увеличаването, годината стане 4, задава true на
 полето hasDegree
 -метод receiveScholarship(min, amount) – добавя сумата amount към парите
 на студента, само ако успехът му е по-висок или равен на минималния
 успех, подаден като параметър (min) и ако възрастта му е под 30 години.
 Методът връща текущите пари на студента (след евентуалното им
 увеличение).
 Да се създаде и конструктор StudentGroup(groupSubject), създаващ обект
 представящ група от студенти от една и съща специалност.
 Полета на новосъздадения обект:
 groupSubject – специалност на студентите в групата (от параметъра)
 students – студенти в групата(масив от обекти)
 freePlaces – свободни места в групата.
 Конструктора да създава места за 5 студента в групата (инициализира
 полето students с нов масив от 5 елемента) и задава стойност 5 на полето
 freePlaces.
 Да се дефинират следните методи:
 -метод addStudent(student), който добавя студент към групата ако
 специалността на студента съвпада с тази на групата и разбира се, ако има
 свободни места.
 След добавяне на студент към групата, да се намалят свободните места в
 групата.
 -метод emptyGroup(), който освобождава всички места в групата и задава
 стойност 5 за полето freePlaces.
 -метод theBestStudentName() - Връща името на студента с най-висок успех
 в групата.
 -метод printStudentsInGroup() - Изкарва информация (Име, успех, ...)за
 всички студент в курса.
 Да се демонстрира използването на класовете Student и StudentGroup
 (Създават се няколко студента, добавя се стипендия на някои от тях,
 прехвърлят се някои от тях в по- горна година. Създадете няколко групи от
 студенти, добавете студенти в тях, изкарайте името на най- добрия студент
 от някоя от групите.)
 */

function Student(name, subject, grade, yearInCollege, age, hasDegree, money) {
    this.name = name;
    this.subject = subject;
    this.grade = grade;
    this.yearInCollege = yearInCollege;
    this.age = age;
    this.hasDegree = hasDegree;
    this.money = money;

    this.upYear = function () {
        if (hasDegree || this.yearInCollege == 4) {
            console.log("Graduate student");

        } else {
            this.yearInCollege++;

            if (this.yearInCollege === 4) {
                this.hasDegree = true;
            }
        }
    };

    this.receiveScholarship = function (min, amount) {
        if (min <= this.grade && this.age < 30) {
            this.money += amount;
            console.log(this.money);

        } else {
            console.log("You have no success!");
        }
    };
}

function StudentGroup(groupSubject) {
    this.groupSubject = groupSubject;
    this.students = new Array(5);
    this.freePlaces = 5;

    this.addStudent = function (student) {
        if (this.freePlaces > 0 && this.groupSubject === student.subject) {

           for (var index = 0; index < this.students.length; index++) {

               if (this.students[index] === undefined) {
                   this.students[index] = student;
                   this.freePlaces--;
                   break;
               }
           }
        }
    };

    this.emptyGroup = function () {
        this.students =  new Array(5);
        this.freePlaces = 5;
    };

    this.theBestStudentName = function () {
        var bestGrade = 0;
        var bestStudentName = '';

        for (var index = 0; index < this.students.length; index++) {
            if (this.students[index] != undefined && this.students[index].grade >= bestGrade) {
                bestGrade = this.students[index].grade;
                bestStudentName = this.students[index].name;
            }
        }
        return bestStudentName;
    };

    this.printStudentsInGroup = function () {
        for (var student in this.students) {
            console.log(this.students[student]);
        }
    };
}

var student1 = new Student("Atanas", 'JS', 6, 3, 22, false, 100);
var student2 = new Student("Ivan", 'JS', 4, 2, 20, false, 200);
var student3 = new Student("Georgi", 'JS', 5, 4, 23, true, 70);
var student4 = new Student("Mira", 'JS', 3, 3, 22, false, 100);
var student5 = new Student("Nikol", 'JS', 4, 1, 19, false, 300);
var student6 = new Student("Petur", 'PHP', 6, 4, 22, true, 70);

var groupJS1 = new StudentGroup('JS');

groupJS1.addStudent(student1);
groupJS1.addStudent(student2);
groupJS1.addStudent(student3);
groupJS1.addStudent(student4);
groupJS1.addStudent(student6);
groupJS1.addStudent(student5);

student4.upYear();
console.log(student4);
student4.upYear();
console.log(student4);


console.log(groupJS1.theBestStudentName());


console.log(groupJS1);

groupJS1.printStudentsInGroup();

student6.receiveScholarship(5.50, 100);
student6.receiveScholarship(3, 100);

console.log(groupJS1.theBestStudentName());