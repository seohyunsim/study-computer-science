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
}

class AddTeam implements Giantstep {
  private children: Giantstep[] = [];

  constructor(private name: string) {}

  add(node: Giantstep): void {
    this.children.push(node);
  }

  getName(): string {
    return this.name;
  }

  getPersonnel(): number {
    return this.children.reduce(
      (total, child) => total + child.getPersonnel(),
      0
    );
  }

  isHandleWeb(): boolean {
    const isWeb = this.children.map((team) => team.isHandleWeb());
    let result = true;

    isWeb.map((el) => {
      if (el === false) {
        result = false;
      } else result = true;
    });

    return result;
  }
}

// 사용 예시
const dev4FloorTeam = new AddTeam("dev4FloorTeam");
const webTeam = new AddTeam("webTeam");
const aiTeam = new AddTeam("aiTeam");

const frontend_team = new Team("frontend_team", 3, true);
const backend_team = new Team("backend_team", 3, true);
const ai_team = new Team("ai_team", 3, false);

webTeam.add(frontend_team);
webTeam.add(backend_team);

aiTeam.add(ai_team);

dev4FloorTeam.add(webTeam);
dev4FloorTeam.add(ai_team);

console.log(
  `${webTeam.getName()}은 ${webTeam.getPersonnel()}명으로 이루어져 있으며 웹을 주로 다루는 것이 ${webTeam.isHandleWeb()}다.`
);
console.log(
  `${aiTeam.getName()}은 ${aiTeam.getPersonnel()}명으로 이루어져 있으며 웹을 주로 다루는 것이 ${aiTeam.isHandleWeb()}다.`
);
console.log(
  `따라서 ${dev4FloorTeam.getName()}은 ${dev4FloorTeam.getPersonnel()}명으로 이루어져 있으며 웹을 주로 다루는 것이 ${dev4FloorTeam.isHandleWeb()}다.`
);
