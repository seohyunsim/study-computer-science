// 상태 인터페이스
interface State {
  doThis(context: Context): void;
}

// ConcreteState
class ClickLock implements State {
  doThis(context: Context): void {
    console.log("--잠금--");

    context.setContext(new ClickPlay());
  }
}

class ClickPlay implements State {
  doThis(context: Context): void {
    console.log("~~잠금 풀림~~");

    context.setContext(new ClickNext());
  }
}

class ClickNext implements State {
  doThis(context: Context): void {
    console.log("<--화면 넘김-->");

    context.setContext(new ClickPrevious());
  }
}

class ClickPrevious implements State {
  doThis(context: Context): void {
    console.log("-->화면 이전으로<--");

    context.setContext(new StartPlayBack());
  }
}

class StartPlayBack implements State {
  doThis(context: Context): void {
    console.log("플레이 시작 🎶");

    context.setContext(new StopPlayBack());
  }
}

class StopPlayBack implements State {
  doThis(context: Context): void {
    console.log("플레이 멈춤 -");

    context.setContext(new ClickLock());
  }
}

// Context
class Context {
  private state: State;

  constructor() {
    this.state = new ClickLock(); // 초기 상태를 설정
  }

  setContext(state: State): void {
    this.state = state;
  }

  changeState(): void {
    this.state.doThis(this);
  }
}

// Client
const context = new Context();

context.changeState();
context.changeState();
context.changeState();
context.changeState();
context.changeState();
context.changeState();
context.changeState();
