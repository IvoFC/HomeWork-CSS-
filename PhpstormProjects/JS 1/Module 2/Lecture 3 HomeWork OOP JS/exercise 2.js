/**
 * Created by ivo on 12.02.17.
 */
/*
Допълнете задачата oт час за Computer да има следния конструктор с
 параметри :
 Computer(year, price, isNotebook, hardDiskMemory, freeMemory,
 operationSystem)
 който инициализира всички полета със стойностите подадени като
 аргументи на конструктора.
 -метод comparePrice(computer), който сравнява цените на 2
 компютъра. Ако цената на първия компютър (този, за който се вика
 метода) е по-висока от тази на компютъра, подаден като аргумент,
 методът връща -1. Ако цената на компютъра подаден като аргумент е
 по-високата, се връща 1, а ако са равни, методът връща стойност 0.
 Да се създадат няколко обекта Computer.
 Да се сравнят цените на някои от компютрите (посредством метода
 comparePrice) и да се изведе подходящо съобщение.
 */

function ComputerMaker(year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem) {
    this.year = year;
    this.price = price;
    this.isNotebook = isNotebook;
    this.hardDiskMemory = hardDiskMemory;
    this.freeMemory = freeMemory;
    this.operationSystem = operationSystem;

    this.comparePrice = function (pc) {
        if (this.price > pc.price) {
            return -1;

        } else if (this.price < pc.price) {
            return 1;

        } else {
            return 0;
        }
    }
}

var pc1 = new ComputerMaker(2017, 2500, true, 1000, 800, 'OS X');
console.log(pc1);

var pc2 = new ComputerMaker(2016, 1500, false, 800, 600, 'Linux');
console.log(pc2);

console.log(pc1.comparePrice(pc2));
console.log(pc2.comparePrice(pc1));