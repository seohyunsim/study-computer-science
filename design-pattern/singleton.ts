class Database {
  private static instance: Database;
  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public connect(): void {
    console.log("Connecting to database...");
  }

  public disconnect(): void {
    console.log("Disconnecting from database...");
  }
}

class App {
  private database: Database;

  constructor() {
    this.database = Database.getInstance();
  }

  public start(): void {
    this.database.connect();
    console.log("Starting the app...");
  }

  public stop(): void {
    console.log("Stopping the app...");
    this.database.disconnect();
  }
}

const app1 = new App();
app1.start();
app1.stop();

const app2 = new App();
app2.start();
app2.stop();

console.log(app1 === app2); // false
