interface Charger {
  charge: () => void;
}

class SamsungCharger implements Charger {
  private volt: number;

  constructor(volt: number) {
    this.volt = volt;
  }

  public charge(): void {
    console.log(`삼성 충전기는 ${this.volt}V의 전압으로 충전해야 한다.`);
  }
}

class AppleCharger {
  private volt: number;

  constructor(volt: number) {
    this.volt = volt;
  }

  public charge(): void {
    console.log(`애플 충전기는 ${this.volt}V의 전압으로 충전해야 한다.`);
  }
}

class ChargerAdapterToSamsung implements Charger {
  private appleCharger: AppleCharger;
  private volt: number;
  private appleVolt: number;

  constructor(volt: number) {
    this.volt = volt;
    this.appleVolt = 120;
    this.appleCharger = new AppleCharger(this.appleVolt);
  }

  public charge(): void {
    this.appleCharger.charge();

    console.log(
      `따라서 삼성 충전기를 사용한다면 삼성 어댑터는 ${this.appleVolt}V의 전압을 ${this.volt}V으로 바꿔준다.`
    );
  }
}

class ChargerAdapterToApple implements Charger {
  private samsungCharger: SamsungCharger;
  private volt: number;
  private samsungVolt: number;

  constructor(volt: number) {
    this.volt = volt;
    this.samsungVolt = 110;
    this.samsungCharger = new SamsungCharger(this.samsungVolt);
  }

  public charge(): void {
    this.samsungCharger.charge();

    console.log(
      `따라서 애플 충전기를 사용한다면 삼성 애플 충전기 어댑터는 ${this.samsungVolt}V의 전압을 ${this.volt}V으로 바꿔준다.`
    );
  }
}

const samsungCharger: Charger = new ChargerAdapterToSamsung(110);
samsungCharger.charge();

const appleCharger: Charger = new ChargerAdapterToApple(120);
appleCharger.charge();
