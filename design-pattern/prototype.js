class Company {
  constructor(name, affiliation, dev_team, office) {
    this.name = name;
    this.dev_team = dev_team;
    this.affiliation = affiliation;
    this.office = office;
  }

  clone() {
    const clone = Object.create(this);
    clone.name = this.name;
    clone.dev_team = this.dev_team;
    clone.affiliation = this.affiliation;
    clone.office = this.office;

    return clone;
  }

  draw() {
    console.log(
      `${this.name}은 ${this.dev_team} 소속의 ${this.affiliation} 팀원이다. 자이언트스텝 ${this.office}에서 근무 중이다.`
    );
  }
}

class DetailInfo extends Company {
  constructor(period, mbti) {
    super();
    this.period = period;
    this.mbti = mbti;
  }

  draw() {
    console.log(
      `${this.name}은 근무한지 약 ${this.period}이 되었으며 MBTI는 ${this.mbti}이다.`
    );
  }
}

const defaultInfo = new Company();
defaultInfo.dev_team = "GX 개발본부";
defaultInfo.affiliation = "프론트 팀";
defaultInfo.office = "2별관 4층";

const yks = defaultInfo.clone();
yks.name = "유경식";

const ssh = defaultInfo.clone();
ssh.name = "심서현";

const kyj = defaultInfo.clone();
kyj.name = "김윤진";

const defaultDetailInfo = new DetailInfo();

const yksDetail = defaultDetailInfo.clone();
yksDetail.name = "유경식";
yksDetail.period = "1년";
yksDetail.mbti = "ENTJ";

const sshDetail = defaultDetailInfo.clone();
sshDetail.name = "심서현";
sshDetail.period = "4개월";
sshDetail.mbti = "ESFP";

const kyjDetail = defaultDetailInfo.clone();
kyjDetail.name = "김윤진";
kyjDetail.period = "4개월";
kyjDetail.mbti = "ESTJ";

defaultInfo.office = "학동역";
yks.draw();
yksDetail.draw();

ssh.draw();
sshDetail.draw();

kyj.draw();
kyjDetail.draw();
