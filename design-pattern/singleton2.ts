class BiBimBap {
  private static instance: BiBimBap;
  private rice: string;
  private ingredient: string;
  private addition: string;
  private branch: number;

  private constructor() {
    this.rice = "보리밥";
    this.ingredient = "나물";
    this.addition = "참기름";
    this.branch = 10;
  }

  // getInstance()로 클래스의 인스턴스를 오직 하나만 생성
  public static getInstance(): BiBimBap {
    if (!BiBimBap.instance) {
      BiBimBap.instance = new BiBimBap();
    }
    return BiBimBap.instance;
  }

  public getRice(): string {
    return this.rice;
  }

  public setRice(value: string): void {
    this.rice = value;
  }

  public getIngredient(): string {
    return this.ingredient;
  }

  public setIngredient(value: string): void {
    this.ingredient = value;
  }

  public getAddition(): string {
    return this.addition;
  }

  public setAddition(value: string): void {
    this.addition = value;
  }

  public getBranch(): number {
    return this.branch;
  }

  public setBranch(value: number): void {
    this.branch = value;
  }

  public getBiBimBap(): string {
    return `비빔밥에는 ${this.rice}으로 만든 ${this.ingredient}외에 ${this.branch}가지 재료가 들어간 후 ${this.addition}으로 마무리 한다.`;
  }
}

const playerStatus1 = BiBimBap.getInstance();
const playerStatus2 = BiBimBap.getInstance();

console.log(playerStatus1 === playerStatus2); // true

playerStatus1.setRice("쌀밥");
playerStatus2.setIngredient("육회");

console.log(playerStatus1.getBiBimBap());
console.log(playerStatus2.getBiBimBap());
