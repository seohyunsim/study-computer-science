class GiantstepTeam {
  private name: string;
  private size: number;
  private handleWeb: boolean;

  constructor(name: string, size: number, handleWeb: boolean) {
    this.name = name;
    this.size = size;
    this.handleWeb = handleWeb;
  }

  public showInfo(): void {
    console.log(
      `${this.name}은 ${this.size}명으로 이루어져 있으며 웹을 주로 다루는 것이 ${this.handleWeb}다.`
    );
  }
}

class GiantstepTeamManager {
  private GiantstepTeams: { [key: string]: GiantstepTeam } = {};

  public getGiantstepTeam(
    name: string,
    size: number,
    handleWeb: boolean
  ): GiantstepTeam {
    const key = `${name}-${size}-${handleWeb}`;

    if (this.GiantstepTeams[key]) {
      console.log(`이미 같은 팀이 존재합니다. ${key}`);
      return this.GiantstepTeams[key];
    }

    return (this.GiantstepTeams[key] = new GiantstepTeam(
      name,
      size,
      handleWeb
    ));
  }
}

const giantstepTeamManager = new GiantstepTeamManager();

const frontend = giantstepTeamManager.getGiantstepTeam(
  "frontend_team",
  3,
  true
);
frontend.showInfo();

const backend = giantstepTeamManager.getGiantstepTeam("backend_team", 3, true);
backend.showInfo();

const ai = giantstepTeamManager.getGiantstepTeam("ai_team", 3, false);
ai.showInfo();

const ai2 = giantstepTeamManager.getGiantstepTeam("ai_team", 3, false);
ai2.showInfo();
