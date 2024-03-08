function Person(name) {
    this.name = name;
    }
    Person.prototype.age = 30;
    const john = new Person("John");
    john.__proto__.age = 40;
    console. log(john.age);
    console. log(Person.prototype.age);