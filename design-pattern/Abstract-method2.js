// 공통 인터페이스
class Pizza {
  constructor(info) {
    this.menu = info.menu;
  }
  makePizza(info) {
    return this.dough() + this.topping(info) + this.bake() + this.finish(info);
  }
  dough() {
    return "밀가루를 반죽하여 도우를 만들고~ / ";
  }
  topping(info) {
    return this.menu + "를 올리고~ / ";
  }
  bake() {
    return "180도 오븐에 20분을 구우면~ / ";
  }
  finish(info) {
    return this.menu + "피자 완성^^!";
  }
}

// 추상 팩토리 인터페이스
class AbstractPizzaFactory {
  createCheeze() {}
  createPatato() {}
  createPepperoni() {}
}

// 구체적인 PizzaFactory 클래스
class PizzaFactory extends AbstractPizzaFactory {
  createCheeze() {
    return new Cheeze();
  }

  createPatato() {
    return new Potato();
  }

  createPepperoni() {
    return new Pepperoni();
  }
}

// 구체적인 Pizza 클래스
class Cheeze extends Pizza {
  constructor() {
    super({ menu: "치즈" });
  }
}

class Potato extends Pizza {
  constructor() {
    super({ menu: "포테이토" });
  }
}

class Pepperoni extends Pizza {
  constructor() {
    super({ menu: "페페로니" });
  }
}

// 클라이언트 코드
const pizzaFactory = new PizzaFactory();
const cheeze = pizzaFactory.createCheeze();
console.log(cheeze.makePizza());
const potato = pizzaFactory.createPatato();
console.log(potato.makePizza());
const pepperoni = pizzaFactory.createPepperoni();
console.log(pepperoni.makePizza());
