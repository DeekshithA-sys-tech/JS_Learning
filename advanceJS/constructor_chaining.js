// constructor chaining without using super() method .   (before ES6)



// function person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.type = 'person';
    
// }
// function employee(name, age, empid) {
//     person.call( this,name, age);
//     this.empid = empid;
//     this.type = 'employee';
// }
// function manager(name, age, empid, dept) {
//     employee.call(this, name, age, empid);
//     this.type = 'manager';
// }



// const Manager = new manager('ram',25,'mg102',1);
// console.log(Manager);
// const Emp =new employee('bem',30,'emp01');
// console.log(Emp);



// CONSTRUCTOR CHAINING USING THIS AND SUPER KEYWORDS (IN ES6)

class vehicle{
    constructor(brand , year) {
        this.brand=brand;
        this.year=year;

    }
    start(){
        console.log(`${this.brand} engine started`);
    }
}

    class car extends vehicle {
        constructor(name,brand,year) {
            super(brand,year)
            this.name=name;
        }
        drive(){
            console.log(`I'm driving ${this.name} `);
        }
    }


    const truck = new vehicle('brand',1959);
    console.log(truck);
    truck.start();
    
    const tesla = new car('tesla','brand',2000);
    console.log(tesla);
    tesla.drive();








