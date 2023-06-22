interface Giantstep {
  getName(): string;
  getPersonnel(): number;
  isHandleWeb(): boolean;
}

class Team implements Giantstep {
  constructor(
    private name: string,
    private size: number,
    private handleWeb: boolean
  ) {}

  getName(): string {
    return this.name;
  }

  getPersonnel(): number {
    return this.size;
  }

  isHandleWeb(): boolean {
    return this.handleWeb;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setPersonnel(size: number): void {
    this.size = size;
  }

  public setIsHandleWeb(handleWeb: boolean): void {
    this.handleWeb = handleWeb;
  }

  public saveState(): Memento {
    return new Memento(this.name, this.size, this.handleWeb);
  }

  public restoreState(memento: Memento): void {
    this.name = memento.getName();
    this.size = memento.getSize();
    this.handleWeb = memento.isHandleWeb();
  }
}

class Memento {
  private name: string;
  private size: number;
  private handleWeb: boolean;

  constructor(name: string, size: number, handleWeb: boolean) {
    this.name = name;
    this.size = size;
    this.handleWeb = handleWeb;
  }

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.size;
  }

  public isHandleWeb(): boolean {
    return this.handleWeb;
  }
}

class AddTeam {
  private children: Memento[] = [];

  public addMemento(node: Memento): void {
    this.children.push(node);
  }

  public getMemento(idx: number): Memento {
    return this.children[idx];
  }
}

// 사용 예시
const dev_team = new Team("frontend_team", 3, true);
const dev4Floor = new AddTeam();

dev4Floor.addMemento(dev_team.saveState());

dev_team.setName("backend_team");
dev_team.setPersonnel(3);
dev_team.setIsHandleWeb(true);

dev4Floor.addMemento(dev_team.saveState());

dev_team.restoreState(dev4Floor.getMemento(0));

console.log(dev_team);

console.log(
  `${dev_team.getName()}은 ${dev_team.getPersonnel()}명으로 이루어져 있으며 웹을 주로 다루는 것이 ${dev_team.isHandleWeb()}다.`
);
