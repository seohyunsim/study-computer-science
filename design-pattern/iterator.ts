// 반복 가능한 컬렉션을 나타내는 인터페이스
interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

// 반복자 인터페이스
interface Iterator<T> {
  next(): IteratorResult<T>;
}

// 과일 클래스
class Fruit {
  constructor(public name: string) {}
}

// 과일 바구니 클래스
class FruitBasket implements Iterable<Fruit> {
  private fruits: Fruit[];

  constructor() {
    this.fruits = [];
  }

  addFruit(fruit: Fruit) {
    this.fruits.push(fruit);
  }

  [Symbol.iterator](): Iterator<Fruit> {
    return new FruitBasketIterator(this.fruits);
  }
}

// 과일 바구니 반복자 클래스
class FruitBasketIterator implements Iterator<Fruit> {
  private fruits: Fruit[];
  private index: number;

  constructor(fruits: Fruit[]) {
    this.fruits = fruits;
    this.index = 0;
  }

  next(): IteratorResult<Fruit> {
    if (this.index < this.fruits.length) {
      const fruit = this.fruits[this.index];
      this.index++;
      return { value: fruit, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}

// 예제 실행
const fruitBasket = new FruitBasket();
fruitBasket.addFruit(new Fruit("바나나"));
fruitBasket.addFruit(new Fruit("키위"));
fruitBasket.addFruit(new Fruit("딸기"));

const iterator = fruitBasket[Symbol.iterator]();
const fruitList: string[] = [];
let result = iterator.next();

while (!result.done) {
  fruitList.push(result.value.name);
  result = iterator.next();
}

console.log(`과일 바구니에 ${fruitList}를 담도록 주문하였다.`);
