// 데코레이터 인터페이스 생성
interface Notifier {
  send(): void;
}

// 기본 컴포넌트 구현
class BaseDecorator implements Notifier {
  send(): void {
    console.log("기본 알림");
  }
}

// 데코레이터 구현 - 기본 컴포넌트를 래핑하고 필요한 추가 기능을 제공
class Decorator implements Notifier {
  protected component: Notifier;

  constructor(component: Notifier) {
    this.component = component;
  }

  send(): void {
    this.component.send();
  }
}

// 구체적인 데코레이터 구현 - 데코레이터의 구체적인 구현체
class SmsDecorator extends Decorator {
  send(): void {
    super.send();
    console.log("sms 전송");
  }
}

class FacebookDecorator extends Decorator {
  send(): void {
    super.send();
    console.log("페이스북 알림");
  }
}

class SlackDecorator extends Decorator {
  send(): void {
    super.send();
    console.log("슬랙 알림");
  }
}

// 사용예시
const baseNotifier: Notifier = new BaseDecorator();
const smsDecorate: Notifier = new SmsDecorator(baseNotifier);
const facebookDecorate: Notifier = new FacebookDecorator(smsDecorate);
const slackDecorate: Notifier = new SlackDecorator(facebookDecorate);

slackDecorate.send();
