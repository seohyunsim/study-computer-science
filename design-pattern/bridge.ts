interface Product {
  name: string;
  shape: "round" | "square" | "triangle";
  color: "red" | "blue" | "yellow" | "orange";
  pattern?: "dots" | "stripe";
  complete?: () => void;
}

// 추상 클래스
abstract class AbstractProduct {
  constructor(public product: Product) {}

  abstract complete(): void;
}

class DefaultMadeProduct extends AbstractProduct {
  complete() {
    console.log(
      `${this.product.name}만드는 방법\n`,
      `${this.product.shape}에 ${this.product.color}색을 입히고 ${this.product.color}를 더하면 완성이다.`
    );
  }
}

class BasketballPreset extends AbstractProduct {
  constructor() {
    super({
      name: "basketball",
      shape: "round",
      color: "orange",
      pattern: "stripe",
    });
  }

  complete() {
    console.log(
      `${this.product.name}만드는 방법\n`,
      `${this.product.shape}에 ${this.product.color}색을 입히고 ${this.product.color}를 더하면 완성이다.`
    );
  }
}

class DicePreset extends AbstractProduct {
  constructor() {
    super({
      name: "dice",
      shape: "square",
      color: "blue",
      pattern: "dots",
    });
  }

  complete() {
    console.log(
      `${this.product.name}만드는 방법\n`,
      `${this.product.shape}에 ${this.product.color}색을 입히고 ${this.product.color}를 더하면 완성이다.`
    );
  }
}

const round: Product = { name: "빨간색 원", shape: "round", color: "red" };
const square: Product = {
  name: "주황색 상자",
  shape: "square",
  color: "orange",
};
const triangle: Product = {
  name: "노란색 세모",
  shape: "triangle",
  color: "yellow",
};

const product1: AbstractProduct = new DefaultMadeProduct(round);
const product2: AbstractProduct = new DefaultMadeProduct(square);
const product3: AbstractProduct = new DefaultMadeProduct(triangle);

product1.complete();
product2.complete();
product3.complete();

const basketball = new BasketballPreset().complete();
const dice = new DicePreset().complete();
