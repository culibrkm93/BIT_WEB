function Student(index, name, year) {
    this.name = name;
    this.id = index;
    this.yearOfStudy = year;
    this.getInfo = function () {
        return (
            "\nIndex:" + this.id
            + "\n" + this.name
            + "\nCurrently on " + this.yearOfStudy + "year\n"
        );

    }
}

var pera = new Student(1, "Pera", 3);
var mika = new Student(2, "Mika", 3);
var zika = new Student(5, "Zika", 4);

var students = [];
students.push(pera);
students.push(mika);




console.log(pera.getInfo());
console.log(mika.getInfo());
console.log(students);
console.log(students[1].getInfo());



function Classroom(name) {
    this.name = name;
    this.students = [];
    this.addStudent = function (student) {
        this.students.push(student);
    }
    this.showStudents = function () {
        for (var i = 0; i < students.length; i++) {
            console.log(this.students[i].getInfo());

        }


    }
}

var web = new Classroom("Web");
var pp = new Classroom("Programing Principals");
var wa = new Classroom("Web Applications");


web.showStudents();



