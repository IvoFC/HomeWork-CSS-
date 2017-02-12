/**
 * Created by ivo on 12.02.17.
 */
/*Да се създадат конструкторите Task и Employee.
 Конструкторът Task представя някакво количество работа(задача)
 което трябва да бъде свършено.
 Конструкторът да дефинира и приема следните полета:
 • name
 • workingHours – показва колко часа остават на задачата за да
 бъде изпълнена
 Да се създаде конструктор за Employee създаващ обект-работник.
 Нека да има следните полета:
 • name – име на работника
 • currentTask – обект който показва текущата задача в/у която
 работи работника
 • hoursLeft – числова стойност, която показва колко работни часа
 остават на работника (за днес)
 Да се направи метод без параметри work() на Employee.
 С извикването на този метод, работника за който е извикан метода
 работи по текущата си задача (ако има такава). Например ако
 работника има останали 4 часа за работа, а по задачата има останали
 7 часа работа, след изпълнението на метода работника ще е останал с
 0 часа работа за деня, а по задачата ще е останало 3 часа работа.
 Ако работника има 8 часа, след изпълнението на метода work()
 работника ще е останал с 1 час работа за деня, а времето което остава
 на задачата да бъде свършена ще е 0.
 Да се направи и метод showReport, който се извиква след като
 работника поработи в/у текущата си задача (извикване на work) и
 показва информация (принтирайки на конзолата) за:
 • името на работника
 • името на задачата
 • работните часовете които остават на работника
 часовете които остават на текущата задача на работника за да
 бъде изпълнена
 Да се тества цялата функционалност. */

function Task(name, workingHours) {
    this.name = name;
    this.workingHours = workingHours;
}

function Employee(name, currentTask, hoursLeft) {
    this.name = name;
    this.currentTask = currentTask;
    this.hoursLeft = hoursLeft;

    this.work = function () {
        if (this.hoursLeft > currentTask.workingHours) {
            this.hoursLeft -= currentTask.workingHours;
            currentTask.workingHours = 0;

        } else if (this.hoursLeft < currentTask.workingHours) {
            currentTask.workingHours -= this.hoursLeft;
            this.hoursLeft = 0;

        } else {
            this.hoursLeft = 0;
            currentTask.workingHours = 0;
        }
    };

    this.showReport = function () {
        console.log("Name of worker: " + this.name + '\n' +
        "Name of task: " + currentTask.name + '\n' +
        "Working hours left: " + this.hoursLeft + '\n' +
        "Remaining time of task: " + currentTask.workingHours);
    };
}

var makeBeton = new Task("Burkai beton", 8);
console.log(makeBeton);

var masterKiro = new Employee("Kiril", makeBeton, 16);
console.log(masterKiro);

masterKiro.work();
masterKiro.showReport();