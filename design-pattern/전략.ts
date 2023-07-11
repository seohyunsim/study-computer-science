interface Strategy {
  goToAirport(): void;
}

// 전략
class WalkStrategy implements Strategy {
  goToAirport(): void {
    console.log("도보로 가는중..");
  }
}

class BicycleStrategy implements Strategy {
  goToAirport(): void {
    console.log("자전거로 가는중..");
  }
}

class PublicTransportStrategy implements Strategy {
  goToAirport(): void {
    console.log("대중교통으로 가는중..");
  }
}

class TaxiStrategy implements Strategy {
  goToAirport(): void {
    console.log("택시로 가는중..");
  }
}

// 컨텍스트
class Traveler {
  private strategy: Strategy;

  constructor() {
    this.strategy = new WalkStrategy();
  }

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  goToAirport(): void {
    this.strategy.goToAirport();
  }
}

// 사용 예시
const traveler = new Traveler();

traveler.setStrategy(new WalkStrategy());
traveler.goToAirport();

traveler.setStrategy(new TaxiStrategy());
traveler.goToAirport();
