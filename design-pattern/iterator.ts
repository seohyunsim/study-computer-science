// 반복 가능한 컬렉션을 나타내는 인터페이스
interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

// 반복자 인터페이스
interface Iterator<T> {
  next(): IteratorResult<T>;
}

// 동물 클래스
class Animal {
  constructor(public name: string) {}
}

// 동물원 클래스
class Zoo implements Iterable<Animal> {
  private animals: Animal[];

  constructor() {
    this.animals = [];
  }

  addAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  [Symbol.iterator](): Iterator<Animal> {
    return new ZooIterator(this.animals);
  }
}

// 동물원 반복자 클래스
class ZooIterator implements Iterator<Animal> {
  private animals: Animal[];
  private index: number;

  constructor(animals: Animal[]) {
    this.animals = animals;
    this.index = 0;
  }

  next(): IteratorResult<Animal> {
    if (this.index < this.animals.length) {
      const animal = this.animals[this.index];
      this.index++;
      return { value: animal, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}

// 예제 실행
const zoo = new Zoo();
zoo.addAnimal(new Animal("Lion"));
zoo.addAnimal(new Animal("Elephant"));
zoo.addAnimal(new Animal("Giraffe"));

const iterator = zoo[Symbol.iterator]();
let result = iterator.next();
while (!result.done) {
  console.log(result.value.name);
  result = iterator.next();
}
