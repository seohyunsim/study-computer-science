// 공통 인터페이스
class House {
  constructor(build) {
    if (build) {
      this.roof = build.roof;
      this.pool = build.pool;
      this.garage = build.garage;
      this.garden = build.garden;
    }
  }

  // 빌더 생성
  static get Builder() {
    class Builder {
      setRoof(roof) {
        this.roof = roof;
        return this;
      }

      setPool(pool) {
        this.pool = pool;
        return this;
      }

      setGarage(garage) {
        this.garage = garage;
        return this;
      }

      setGarden(garden) {
        this.garden = garden;
        return this;
      }

      build() {
        return new House(this);
      }
    }

    return new Builder();
  }
}

const builder = House.Builder;
const user1 = builder
  .setRoof("태양광 지붕")
  .setPool("300사이즈 수영장")
  .setGarage("주차 2대 가능")
  .build();
console.log("user1", user1);

const builder2 = House.Builder;
const user2 = builder2.setPool("휘트니스 센터").setGarden("텃밭").build();
console.log("user2", user2);
