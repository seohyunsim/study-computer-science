// constructor 지정
class SeohyunBucks {
  constructor(info) {
    this.client = info.client;
    this.menu = info.menu;
  }
}

// Coffee pickUp 클래스
class Coffee extends SeohyunBucks {
  pickUp(info) {
    return this.client + " 고객님~ 주문하신 " + this.menu + "한 잔 드릴게요~!";
  }
}

// 팩토리 클래스
class CoffeeFactory {
  // 인스턴스를 만드는 행위를 추상화
  static createCoffee(menu) {
    return menu.createCoffee();
  }
}

// 주문한 Coffee 팩토리
class AmericanoFactory {
  static createCoffee() {
    return new Americano();
  }
}

class LatteFactory {
  static createCoffee() {
    return new Latte();
  }
}

// 주문한 Coffee 클래스
class Americano extends Coffee {
  constructor() {
    //super키워드로 부모클래스 생성자 호출
    super({ menu: "americano", client: "앙윤진띠" });
  }
}

class Latte extends Coffee {
  constructor() {
    //super키워드로 부모클래스 생성자 호출
    super({ menu: "latte", client: "앙경식띠" });
  }
}

// 클라이언트 코드
const americano = CoffeeFactory.createCoffee(AmericanoFactory);
console.log(americano.pickUp());
const latte = CoffeeFactory.createCoffee(LatteFactory);
console.log(latte.pickUp());
