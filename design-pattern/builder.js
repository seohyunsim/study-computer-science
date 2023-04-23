class Person {
  constructor(build) {
    if (build) {
      this.id = build.id;
      this.name = build.name;
      this.age = build.age;
    }
  }

  static get Build() {
    class Build {
      name(name) {
        this.name = name;
        return this;
      }
      age(age) {
        this.age = age;
        return this;
      }
      height(height) {
        this.height = height;
        return this;
      }
      build() {
        return new Person(this);
      }
    }
    return new Build();
  }
}

const personBuilder1 = person.build;
const person1 = personBuilder1.name("tatiana").age(26);
const personBuilder2 = person.build;
const person2 = personBuilder2.name("James").age(50);
