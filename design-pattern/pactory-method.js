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
  // 타입에 따라서 커피를 생성하는 createCoffee 메서드
  static createCoffee(menu) {
    if (menu === "americano") {
      return new Americano();
    } else if (menu === "latte") {
      return new Latte();
    } else {
      throw new Error("다시 주문해 주세요.");
    }
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
const americano = CoffeeFactory.createCoffee("americano");
console.log(americano.pickUp());
const latte = CoffeeFactory.createCoffee("latte");
console.log(latte.pickUp());
